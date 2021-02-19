import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://intravision-task.test01.intravision.ru/"
});

export const tasksAPI = {
  getTasks() {
    return instance.get(
      `odata/tasks?tenantguid=b4308840-a255-4d93-845a-543c2a8bdec4`
    );
  }
};
