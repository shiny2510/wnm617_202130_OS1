
const makeAnimalList = templater(o=>`
<div style="background-color: #F3FFC6;" class="animallist-item display-flex animal-jump" data-id="${o.id}">
   <div class="flex-none animallist-image"><img src="${o.img}" alt=""></div>
   <div class="animallist-description flex-stretch">
      <div  class="animallist-name" style="color: #B6174B;">${o.name}</div>
      <div class="animallist-info"><span class="animal-info-header">TYPE:</span>${o.type}</div>
      <div class="animallist-info"><span class="animal-info-header">COLOR:</span>${o.color}</div>
   </div>
</div>
`);


const makeUserProfile = o => `
<div class="user-profile-image">
   <img src="${o.img}" alt="">
   <div>
      <a href="#user-upload-page" class="icon"><img style="position: absolute; right: 0; top: 90%; margin-right: 10px;" src="img/camera-icon.png" alt=""></a>
   </div>
</div>
<div class="user-profile-description">
   <div class="user-profile-name">${o.name}</div>
   <div class="user-profile-username"><span class="user-info">USERNAME: </span>${o.username}</div>
   <div class="user-profile-email"><span class="user-info">EMAIL: </span>${o.email}</div>
</div>
`;

const makeAnimalInfo = o => `
<div class="icon floater right animal-delete" data-id="${o.id}"><img style="margin:10px" src="img/trash-icon.png"></div>
<div class="animal-name">${o.name}</div>
<div class="animal-type"><span class="animal-info-header">TYPE: </span>${o.type}</div>
<div class="animal-color"><span class="animal-info-header">COLOR: </span>${o.color}</div>
<div class="animal-description"><span class="animal-info-header">DESCRIPTION: </span>${o.description}</div>
`;




const makeAnimalPopup = o => `
<div class="display-flex animal-jump" data-id="${o.animal_id?o.animal_id:o.id}">
   <div class="flex-none animal-image-thumb">
      <img src="${o.img}">
   </div>
   <div class="flex-none" style="padding:1em">
      <div class="animal-name">${o.name}</div>
      <div class="animal-type">${o.type}</div>
      <div class="animal-breed">${o.color}</div>
   </div>
</div>
`;




// destructuring
const FormControlInput = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
      <input class="form-input" type="${type}" id="${namespace}-${name}" data-role="none" placeholder="${placeholder}" value="${value}">
   </div>`;
}
const FormControlTextarea = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
      <textarea rows="10" cols="30" style="border: none; border-bottom: 1px solid var(--color-primary-darkpink); resize: none;" class="form-input" id="${namespace}-${name}" data-role="none" placeholder="${placeholder}">${value}</textarea>
   </div>`;
}


const FormSelectOptions = (options,selected=1) => {
   return options.reduce((r,o)=>{
      return r+`<option value="${o.id}" ${o.id===selected?'selected':''}>${o.name}</option>`
   },'');
}

const FormSelect = (options,id,selected=1) => {
   return `<div class='form-select'>
      <select id="${id}">
         ${FormSelectOptions(options,selected)}
      </select>
   </div>`;
}




const makeAnimalProfileUpdateForm = o => `
${FormControlInput({
   namespace:"animal-edit",
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type The Flower Name',
   value:o.name
})}
${FormControlInput({
   namespace:"animal-edit",
   name:'type',
   displayname:'Type',
   type:'text',
   placeholder:'Type The Flower Type',
   value:o.type
})}

${FormControlInput({
   namespace:"animal-edit",
   name:'color',
   displayname:'Color',
   type:'text',
   placeholder:'Type The Color of the flower',
   value:o.color
})}
${FormControlTextarea({
   namespace:"animal-edit",
   name:'description',
   displayname:'Description',
   type:'text',
   placeholder:'Type The Flower Description',
   value:o.description
})}
`



const makeUserProfileUpdateForm = o => `
${FormControlInput({
   namespace:"user-edit",
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type Your Name',
   value:o.name
})}
${FormControlInput({
   namespace:"user-edit",
   name:'username',
   displayname:'Username',
   type:'text',
   placeholder:'Type Your Username',
   value:o.username
})}
${FormControlInput({
   namespace:"user-edit",
   name:'email',
   displayname:'Email',
   type:'text',
   placeholder:'Type Your Email',
   value:o.email
})}
`

const makeUserPasswordUpdateForm = o => `
${FormControlInput({
   namespace:"user-password",
   name:'old-password',
   displayname:'Old Password',
   type:'password',
   placeholder:'Type Your Old Password',
   value:'',
})}
${FormControlInput({
   namespace:"user-password",
   name:'new-password',
   displayname:'New Password',
   type:'password',
   placeholder:'Type Your New Password',
   value:'',

})}
${FormControlInput({
   namespace:"user-password",
   name:'confirm-password',
   displayname:'Confirm Password',
   type:'password',
   placeholder:'Confirm Your New Password',
   value:'',

})}
`
const makeAnimalListSet = (animals,missing_text="") => {
   animal_template = animals.length?
      makeAnimalList(animals):
      `<div class="animallist-item"><div class="animallist-description">${missing_text}</div></div>`

   $("#list-page .animallist").html(animal_template);
}

const capitalize = s => s[0].toUpperCase()+s.substr(1);

const filterList = (animals,type) => {
   let a = [...(new Set(animals.map(o=>o[type])))];
   return templater(o=>o?`<li class="filter" style="padding-left: 5px; padding-right: 5px;" data-field="${type}" data-value="${o}">${capitalize(o)}</li>`:'')(a);
}

const makeFilterList = (animals) => {
   return `
   <li class="filter" style="padding-right: 5px;" data-field="type" data-value="">All</li>
   |
   ${filterList(animals,'type')}
   |
   ${filterList(animals,'color')}
   `
}