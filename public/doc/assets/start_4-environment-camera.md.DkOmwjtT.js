import{_ as t,c,j as o,a as d,G as r,a0 as n,o as p,B as s}from"./chunks/framework.BTgeeuQa.js";const i="/doc/start/inspector.jpg",l="/doc/start/scene_create_default_environment.jpg",m="/doc/start/orbit-camera.jpg",_="/doc/start/camalphabeta.jpg",B=JSON.parse('{"title":"环境和相机","description":"","frontmatter":{},"headers":[],"relativePath":"start/4-environment-camera.md","filePath":"start/4-environment-camera.md"}'),h={name:"start/4-environment-camera.md"};function b(u,e,f,g,v,k){const a=s("AppName");return p(),c("div",null,[e[0]||(e[0]=o("h1",{id:"环境和相机",tabindex:"-1"},[d("环境和相机 "),o("a",{class:"header-anchor",href:"#环境和相机","aria-label":'Permalink to "环境和相机"'},"​")],-1)),r(a),e[1]||(e[1]=n('提供了默认的环境和相机，以方便用户快速进行开发。<h2 id="检查器" tabindex="-1">检查器 <a class="header-anchor" href="#检查器" aria-label="Permalink to &quot;检查器&quot;">​</a></h2><p>检查器是BabylonJS提供的一款开发工具，主要用于浏览、调试。打开检查器通过下拉菜单-<code>工具</code>-<code>检查器</code>，或者右侧工具条第一个图标，快捷键<code>Ctrl</code> + <code>I</code>。</p><p>通过检查器面板可以查看场景中存在的节点、材质、纹理、动画等，通过最上方的工具可以控制节点的位置、旋转、缩放等。</p><p><img src="'+i+'" alt="inspector"></p><h2 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h2><p>环境由天空盒和地面组成，用于为场景提供背景和地面，以及为PBR材质提供全局照明。创建环境可以使用场景分类下的<code>创建环境</code>拼图。</p><p><img src="'+l+'" alt="scene_create_default_environment"></p><p>如果不通过选项为拼图提供参数，那么软件会从BabylonJS服务器加载所需的贴图，这在开发阶段会比较方便，但是最终还是需要指定贴图路径。</p><p>在项目文件夹中，提供了用于地面的名为<code>backgroundGround.png</code>的贴图；用于天空盒背景的名为<code>backgroundSkybox.dds</code>（或.env格式）的立方体贴图。此外，还要为场景指定环境贴图，默认是一张名为<code>environment.dds</code>的立方体贴图。环境贴图只对场景中的PBR材质有效，用于提供环境照明和反射。</p><div class="tip custom-block"><p class="custom-block-title">注</p><p>立方体贴图是应用到立方体各个面的6张图片组成的无缝贴图，将这些贴图以<code>.dds</code>或<code>.env</code>格式封装成单个文件，以方便加载和使用。</p></div><h2 id="相机" tabindex="-1">相机 <a class="header-anchor" href="#相机" aria-label="Permalink to &quot;相机&quot;">​</a></h2><p>名为<code>defaultCamera</code>的默认相机是一种<code>环绕相机</code>类型的相机，可以围绕一个目标点进行环绕观察。使用相机分类下的<code>相机属性</code>拼图，可以设置和获取它的所有参数。</p><p><img src="'+m+'" alt="orbit-camera"></p><p>由于使用<code>.gltf/.glb</code>格式，需要将默认的左手坐标系改为右手坐标系（不改的话，通过检查器会发现__root__节点Z轴缩放会出现负值），所以在默认相机中看到的模型朝向与实际相反。这个环绕相机也称为“轨道相机”，就像卫星沿着轨道围绕着地球一样，看看下面这张示意图：</p><p><img src="'+_+'" alt="camalphabeta"></p><p>注意，alpha、beta和半径这些参数单位都是弧度，如果要使用角度，可以使用数学分类下的<code>转为弧度</code>拼图来转换。</p><p>如果视图中你的模型看起来太远或太近，就可以修改相机的<code>半径radius</code>参数，使构图合理。</p><p>此外，还有另一种和三维软件中一致的控制方式：使用<code>相机属性</code>拼图中的<code>位置</code>和<code>目标</code>属性定位相机。</p><p>获取相机可以使用相机分类下的<code>设置激活相机</code>拼图，将设置改为获取就可以了。也可以使用<code>节点</code>分类下带有相机图标的<code>相机选择器</code>拼图，或者该分类下的<code>获取节点</code>拼图，并输入相机名字“defaultCamera”。</p>',20))])}const P=t(h,[["render",b]]);export{B as __pageData,P as default};