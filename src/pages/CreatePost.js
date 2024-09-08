import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
      ],
}

const formats= [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

function CreatePost() {
    const [title, setTitle] = React.useState('');
    const [summary, setSummary] = React.useState('');
    const [content, setContent] = React.useState('');
   const [files, setFiles] = React.useState('');

   async function createNewPost(e){
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
            e.preventDefault();
            // console.log(file);
            
        const response= await fetch('http://localhost:4000/post',{
            method: 'POST',
            body: data,
        });
          console.log( await response.json());
           
            // .then(()=> {
            //     setTitle('');
            //     setSummary('');
            //     setContent('');
    
    }

  return (
    <form onSubmit={createNewPost}>
        <input type="title" placeholder={'Title'}
        value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="summary" placeholder={'Summary'}
        value={summary} onChange={(e)=> setSummary(e.target.value)}/>
        <input type="file"  onChange={(e)=>setFiles(e.target.files)}/>
        <ReactQuill value={content} modules={modules} formats={formats}
        onChange={(newValue)=>setContent(newValue)}/>
        <button style={{marginTop: '6px'}}>Create post</button>
    </form>
  )
}

export default CreatePost