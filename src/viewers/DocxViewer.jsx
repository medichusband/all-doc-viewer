import React,{useEffect,useState} from 'react'
import mammoth from 'mammoth'
export default function DocxViewer({file}){const[html,setHtml]=useState('');const[error,setError]=useState('');useEffect(()=>{let a=true;(async()=>{try{const arrayBuffer=await file.arrayBuffer();const result=await mammoth.convertToHtml({arrayBuffer});if(a)setHtml(result.value)}catch{if(a)setError('DOCX 문서를 열지 못했어요.')}})();return()=>{a=false}},[file]);if(error)return <div className="viewer-error">{error}</div>;return <article className="office-paper docx-content" dangerouslySetInnerHTML={{__html:html}}/>}
