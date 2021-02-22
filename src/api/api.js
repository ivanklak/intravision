import * as axios from "axios";

const tenantguid = "b4308840-a255-4d93-845a-543c2a8bdec4";

const instance = axios.create({
  baseURL: "http://intravision-task.test01.intravision.ru/"
});

export const tasksAPI = {
  getTasks() {
    return instance.get(
      `odata/tasks?tenantguid=b4308840-a255-4d93-845a-543c2a8bdec4`
    );
  },
  getTasksIds(id) {
    return instance.get(`api/${tenantguid}/Tasks/${id}`);
  }
};

export const taskUpdateAPI = {
  getUpdate(orderId, statusId) {
    return instance.put(`api/${tenantguid}/Tasks/${orderId}/`, {
      statusId: statusId
    });
  }
};

export const statusesAPI = {
  getStatus() {
    return instance.get(`api/${tenantguid}/Statuses`);
  }
};

export const prioritiesAPI = {
  getPriorities() {
    return instance.get(`api/${tenantguid}/Priorities`);
  }
};

export const taskCreateAPI = {
  getCreate(data) {
    // debugger;
    return instance.post(`api/${tenantguid}/Tasks`, {
      name: data.name,
      description: data.description
    });
  }
};
