import{_ as t}from"./chunks/AutoDoc.Cae4M7x9.js";import{c as a,j as o,a as n,G as l,k as i,o as r}from"./chunks/framework.BTgeeuQa.js";const d={create_sound:{doc:!0,zhname:"创建音频",tooltip:`创建基于Web Audio的音频，因此需要浏览器支持此API。此拼图支持创建环境音频、空间音频。
参数：
名字 - 音频名称
源 - 可以通过地址加载或通过资产管理器加载的原始数据创建
选项 - 控制音频自动播放等选项`},soundOptions:{doc:!1,children:{autoplay:{zhname:"自动播放",tooltip:"设置或获取音频是否自动播放。"},loop:{zhname:"循环",tooltip:"设置或获取音频是否循环播放。"},volume:{zhname:"音量",tooltip:"设置音频音量。"},length:{zhname:"时长(秒)",tooltip:"设置音频时长，单位秒"},playbackRate:{zhname:"播放速率",tooltip:"设置音频播放速率"},offset:{zhname:"偏移(秒)",tooltip:"设置音频偏移，单位秒"},spatialSound:{zhname:"空间音频",tooltip:"设置或获取是否启动空间音频。"},refDistance:{zhname:"适听距离",tooltip:"设置或获取空间音处于最佳音量的距离。"},maxDistance:{zhname:"最大距离",tooltip:"设置或获取空间音频最大可听距离。"},distanceModel:{zhname:"距离衰减",tooltip:"设置或获取空间音频距离衰减模式，可选参数：inverse | exponential"},rolloffFactor:{zhname:"衰减系数",tooltip:"设置或获取空间音频的衰减系数。"},skipCodecCheck:{zhname:"跳过编码器检查",tooltip:"跳过编码器检查"},streaming:{zhname:"流媒体",tooltip:"流媒体"}}},sound_properties_accessors:{doc:!0,zhname:"音频属性",tooltip:"设置或获取音频属性。",children:{autoplay:{doc:!0,zhname:"自动播放",tooltip:"设置或获取音频是否自动播放。"},distanceModel:{doc:!0,zhname:"距离衰减",tooltip:"设置或获取空间音频距离衰减模式，可选参数：inverse | exponential"},maxDistance:{doc:!0,zhname:"最大距离",tooltip:"设置或获取空间音频最大可听距离。"},refDistance:{doc:!0,zhname:"适听距离",tooltip:"设置或获取空间音处于最佳音量的距离。"},rolloffFactor:{doc:!0,zhname:"衰减系数",tooltip:"设置或获取空间音频的衰减系数。"},loop:{doc:!0,zhname:"循环",tooltip:"设置或获取音频是否循环播放。"},spatialSound:{doc:!0,zhname:"空间音频",tooltip:"设置或获取是否启动空间音频。"},isPaused:{doc:!0,zhname:"是否暂停",tooltip:"设置或获取音频是否处于暂停中。"},isPlaying:{doc:!0,zhname:"是否播放",tooltip:"设置或获取音频是否处于播放中。"},currentTime:{doc:!0,zhname:"当前时间",tooltip:"设置或获取音频当前时间。"},metadata:{doc:!1,zhname:"元数据",tooltip:"设置或获取用户设置的元数据。"},directionalConeInnerAngle:{doc:!1,zhname:"喇叭内角",tooltip:"设置或获取喇叭内角度数。"},directionalConeOuterAngle:{doc:!1,zhname:"喇叭外角",tooltip:"设置或获取喇叭外角度数。"},onEndedObservable:{doc:!0,zhname:"当结束时",tooltip:"当音频结束时"}}},sound_playback:{doc:!0,zhname:"音频回放",tooltip:"控制音频回放。"},set_global_volume:{doc:!0,zhname:"设置全局音量",tooltip:"为所有音频设置统一音量。数值 0-1"},set_sound_volume:{doc:!0,zhname:"设置音频音量",tooltip:"为指定音频设置音量。数值 0-1"},set_sound_directional_cone:{doc:!0,zhname:"设置喇叭",tooltip:`将空间音频设置为喇叭。参数：
内角：声音最大的角度范围
外角：声音衰减的范围
背面音量：喇叭相反方向的音量
方向：喇叭的朝向`},attach_sound_to_mesh:{doc:!0,zhname:"附加音频到网格",tooltip:"将空间音频附加到网格或变换节点上，以跟随其位置。"},create_audio_analyser:{doc:!0,zhname:"创建音频频谱",tooltip:`创建一个三维音频频谱。参数：
名字 - 可根据此名字控制频谱整体的变换
大小 - 频谱单元大小
位置 - 频谱在场景中的位置`}},h=JSON.parse('{"title":"媒体 Media","description":"","frontmatter":{},"headers":[],"relativePath":"blocks-reference/media.md","filePath":"blocks-reference/media.md"}'),c={name:"blocks-reference/media.md"},z=Object.assign(c,{setup(s){return(m,e)=>(r(),a("div",null,[e[0]||(e[0]=o("h1",{id:"媒体-media",tabindex:"-1"},[n("媒体 Media "),o("a",{class:"header-anchor",href:"#媒体-media","aria-label":'Permalink to "媒体 Media"'},"​")],-1)),e[1]||(e[1]=o("p",null,"用于创建音频等多媒体内容。",-1)),l(t,{data:i(d)},null,8,["data"])]))}});export{h as __pageData,z as default};