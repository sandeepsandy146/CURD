import designations from "../models/designations.js";
import { empInfo } from "../models/nodes.js";
const addEmpInfoToTable = (empInfoData) => {
  console.log(empInfoData);

  const trData = document.createElement("tr");
  let trDataDetails = `<td> ${empInfoData.empName} </td>`;
  trDataDetails += `<td> ${empInfoData.age} </td>`;
  trDataDetails += `<td> ${designations[empInfoData.designation]} </td>`;
  trDataDetails += `<td><button onclick="editRecord('${empInfoData.empName}')">Edit</button><button onclick="deleteRecord('${empInfoData.empName}')">Delete</button></td>`;
  trData.innerHTML = trDataDetails;
  empInfo.appendChild(trData);
};

export default addEmpInfoToTable;
