const mainSite = 'https://fast-taiga-49673.herokuapp.com/api/v1/references'

const sectionList = document.querySelector('.list')

const buttonSave = document.querySelector('.upload-btn');
const mainForm = document.querySelector('.form-fileUpload');


// UPLOAD FILE AND REVISISION

mainForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log('form submit canceled')
})
buttonSave.addEventListener('click', async(e)=>{
   postForm();
  
  
  
});

const postForm = async()=>{
  const formData = new FormData(mainForm)
  const response = await axios.post(mainSite, formData);
  console.log(response);
  mainForm.reset();
  getListofReferences(mainSite)
  
}

//GET LIST OF REFERNCES
const getListofReferences = async(url)=>{
  const getData = await axios.get(url)
  //console.log(getData.data);
  insertList(getData.data.data)
}
// ADD list to DOM
const insertList = (items)=>{
  sectionList.innerHTML='';
  sectionList.innerHTML = `
  <ul class="reference-list">
    ${items.map(item=>`<li><span><a href="${item.links.refFile}">${item.attributes.referenceNumber}</a></span><span> Rev.${item.attributes.referenceRevision}</li></span> </li>`).join('')}
  </ul>
  `
  };




getListofReferences(mainSite);





