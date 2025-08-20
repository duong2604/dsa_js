/**
 * add/ update/ remove/ get/ list by criteria
 * query -->  id, email, nationalId --> unique
 * list --> department, managerId, skill
 * unique key : id, email, nationalId
 * update: email, department, skills,...
 *
 *
 */

/**
 * Employee {
 * id: string,
 * name: string,
 * email?: string
 * nationalId?: string
 * department?: string
 * role?: string
 * managerId?: string | null,
 * skills?: string[]
 * salary?: number
 *
 * }
 *
 *
 *
 *
 */

class EmployeeStore {
  constructor() {
    this.byId = new Map();
    this.byEmail = new Map();
    this.byNationalId = new Map();
    this.byDept = new Map();
    this.bySkill = new Map();
  }

  // helper
  _normEmail(email) {
    if (email) {
      return email.trim().toLowerCase();
    }
    return "";
  }

  _normSkill(sk) {
    if (sk) {
      return sk.trim().toLowerCase();
    }
    return "";
  }

  _asSet(map, key) {
    if (!map.has(key)) {
      map.set(key, new Set());
    }
    return map.get(key);
  }

  _index(emp) {
    this.byId.set(emp.id, { ...emp, email: this._normEmail(emp.email) });
    if (this._normEmail(emp.email))
      this.byEmail.set(this._normEmail(emp.email), emp.id);
    if (emp.nationalId) this.byNationalId.set(emp.nationalId, emp.id);
    if (emp.department) this._asSet(this.byDept, emp.department).add(emp.id);
    for (const sk of emp.skills) this._asSet(this.bySkill, sk).add(emp.id);
  }

  _removeFrom(map, key, id) {
    const set = map.get(key);
    if (!set) return;
    set.delete(id);
  }

  add(emp) {
    if (!emp || !emp.id) throw new Error("Employee must have id!");
    if (this.byId.has(emp.id)) throw new Error("Duplicate id");
    if (this.byEmail.has(this._normEmail(emp.email))) {
      throw new Error("Duplicate email!");
    }
    if (this.byNationalId.has(emp.nationalId)) {
      throw new Error("Duplicate nationalId");
    }

    this._index(emp);

    return emp.id;
  }

  getById(id) {
    return this.byId.get(id) || null;
  }

  getByEmail(email) {
    const id = this.byEmail.get(this._normEmail(email));
    return id ? this.byId.get(id) : null;
  }

  getByNID(nid) {
    const id = this.byNationalId.get(nid);
    return id ? this.byId.get(id) : null;
  }

  updateEmail(id, email) {
    const currEmp = this.byId.get(id);
    if (!currEmp) throw new Error("Not found!");

    const normNewEmail = (email || "").trim().toLowerCase();
    if (currEmp.email !== normNewEmail) {
      if (
        email &&
        this.byEmail.has(normNewEmail) &&
        this.byEmail.get(normNewEmail) !== id
      ) {
        throw new Error("Duplicate email!");
      }

      currEmp.email = email;
    }

    return currEmp;
  }

  // Get all emp from the dept
  listByDepartment(dept) {
    const ids = this.byDept.get(dept);
    return ids ? [...ids].map((id) => this.byId.get(id)) : [];
  }

  // update dept if an emp leave and to a new dept
  updateDepartment(id, newDept) {
    const currEmp = this.byId.get(id);
    if (!currEmp) throw new Error("Not found!");

    if (!currEmp.dept) return;

    this._removeFrom(this.byDept, currEmp.department, id);
    currEmp.department = newDept;
    if (newDept) this._asSet(this.byDept, newDept).add(id);
    return currEmp;
  }

  removeEmp(id) {
    const currEmp = this.byId.get(id);
    if (!currEmp) throw new Error("Not found!");

    if (currEmp.nationalId) this.byNationalId.delete(currEmp.nationalId);
    if (currEmp.email) this.byEmail.delete(currEmp.email);
    if (currEmp.department)
      this._removeFrom(this.byDept, currEmp.department, currEmp.id);
    this.getById.delete(id);

    return true;
  }

  listEmpBySkill(skill) {
    const ids = this.bySkill.get(this._normSkill(skill));
    return ids ? [...ids].map((id) => this.byId.get(id)) : [];
  }

  updateSkill(id, newSkills = []) {
    const currEmp = this.byId.get(id);
    if (!currEmp) throw new Error("Not found!");
    for (const sk of currEmp.skills)
      this._removeFrom(this.bySkill, this._normSkill(sk), id);
    currEmp.skills = Array.isArray(newSkills) ? newSkills.slice() : [];
    for (const sk of newSkills) this._asSet(this.bySkill, sk).add(id);

    return currEmp;
  }
}

export default EmployeeStore;
