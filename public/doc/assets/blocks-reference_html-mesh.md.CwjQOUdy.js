import{_ as a}from"./chunks/AutoDoc.Cae4M7x9.js";import{c as l,j as t,a as r,G as h,k as n,o as m}from"./chunks/framework.BTgeeuQa.js";const o={type:{doc:!0,zhname:"类型",shadow:["HTML_MESH_TYPE_DROPDOWN",null],tooltip:"要嵌入场景的HTML内容的类型。"},htmlElement:{doc:!0,zhname:"HTML元素",shadow:["NONE",null],tooltip:"HTMLElement。"},width:{doc:!0,zhname:"宽",shadow:["NUM",4],tooltip:"网格宽度。注意，网格大小在这里指定后不能再缩放，可以移动和旋转。"},height:{doc:!0,zhname:"高",shadow:["NUM",3],tooltip:"网格高度。注意，网格大小在这里指定后不能再缩放，可以移动和旋转。"},pointerEnter:{doc:!0,zhname:"捕获指针",shadow:["BOOL","TRUE"],tooltip:"当指针移入时自动捕获指针，与嵌入的HTML内容交互，此时无法与场景交互。"}},d={create_html_mesh:{doc:!0,zhname:"创建HTML网格",tooltip:`用于将HTML内容嵌入到3D场景中，可以嵌入视频、网站、PDF或任何HTML元素。
注意，有的远程资源是不允许跨域访问的，这些资源无法用于此拼图。`,children:o},html_mesh_property:{doc:!0,zhname:"HTML网格属性",shadow:["MESH","htmlMesh"],tooltip:"设置或获取HTML网格属性。",children:{captureOnPointerEnter:{doc:!0,zhname:"捕获指针",shadow:["BOOL","TRUE"],tooltip:"设置当指针移入时自动捕获指针，与嵌入的HTML内容交互，此时无法与场景交互。"},element:{doc:!0,zhname:"元素",shadow:["NULL",""],tooltip:"获取嵌入的HTML元素。"}}},update_html_mesh_content:{doc:!0,zhname:"更新HTML网格",tooltip:"更新HTML网格内容。",children:o},create_html_iframe_element:{doc:!0,zhname:"创建HTML内联窗口",tooltip:"创建一个HTML<iframe>元素。",children:{src:{doc:!0,zhname:"源",shadow:["TEXT","https://www.example.com"],tooltip:"设置内联窗口的源。"},width:{doc:!0,zhname:"宽度",shadow:["TEXT","300"],tooltip:"设置内联窗口的宽度。"},height:{doc:!0,zhname:"高度",shadow:["TEXT","150"],tooltip:"设置内联窗口的高度。"},allowfullscreen:{doc:!0,zhname:"全屏",shadow:["BOOL","TRUE"],tooltip:"设置内联窗口是否允许全屏。"},style:{doc:!0,zhname:"样式",shadow:["OBJECT",null],tooltip:"设置内联窗口的样式。"}}},create_html_div_element:{doc:!0,zhname:"创建HTML容器",tooltip:`创建一个HTML<div>元素。
参数
子级：HTML元素或HTML元素数组。
样式：以js形式设置元素样式。`},create_html_image_element:{doc:!0,zhname:"创建HTML图片",tooltip:"创建一个HTML<img>元素。"},create_html_paragraph_element:{doc:!0,zhname:"创建HTML段落",tooltip:"创建一个HTML<p>元素。"}},_=JSON.parse('{"title":"HTML网格","description":"","frontmatter":{},"headers":[],"relativePath":"blocks-reference/html-mesh.md","filePath":"blocks-reference/html-mesh.md"}'),s={name:"blocks-reference/html-mesh.md"},u=Object.assign(s,{setup(c){return(i,e)=>(m(),l("div",null,[e[0]||(e[0]=t("h1",{id:"html网格",tabindex:"-1"},[r("HTML网格 "),t("a",{class:"header-anchor",href:"#html网格","aria-label":'Permalink to "HTML网格"'},"​")],-1)),e[1]||(e[1]=t("p",null,"这类拼图用于将HTML内容，如视频、网站、PDF或任何HTML元素嵌入到三维场景中。需要注意的是，有的远程资源是不允许跨域访问的，这些资源无法用于此拼图。",-1)),h(a,{data:n(d)},null,8,["data"])]))}});export{_ as __pageData,u as default};