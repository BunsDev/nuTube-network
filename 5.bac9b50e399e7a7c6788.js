(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4w17":function(e,n,t){"use strict";(function(t){var i,o=function(e,n,i){var o;(o=void 0!==t?t:null)&&"undefined"==typeof window&&void 0!==t&&(t.navigator={userAgent:"Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45",getUserMedia:function(){}},t.console||(t.console={}),void 0!==t.console.log&&void 0!==t.console.error||(t.console.error=t.console.log=t.console.log||function(){console.log(arguments)}),"undefined"==typeof document&&(o.document={documentElement:{appendChild:function(){return""}}},document.createElement=document.captureStream=document.mozCaptureStream=function(){var e={getContext:function(){return e},play:function(){},pause:function(){},drawImage:function(){},toDataURL:function(){return""}};return e},o.HTMLVideoElement=function(){}),"undefined"==typeof location&&(o.location={protocol:"file:",href:"",hash:""}),"undefined"==typeof screen&&(o.screen={width:0,height:0}),"undefined"==typeof URL&&(o.URL={createObjectURL:function(){return""},revokeObjectURL:function(){return""}}),"undefined"==typeof MediaStreamTrack&&(o.MediaStreamTrack=function(){}),void 0===a&&(o.RTCPeerConnection=function(){}),o.window=t);var a=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;"undefined"==typeof MediaStreamTrack&&(MediaStreamTrack={});var l={encryption:"sha-256",audio:{send:{tracks:[],codecs:[],availableBandwidth:0,streams:0,framerateMean:0,bitrateMean:0},recv:{tracks:[],codecs:[],availableBandwidth:0,streams:0,framerateMean:0,bitrateMean:0},bytesSent:0,bytesReceived:0,latency:0,packetsLost:0},video:{send:{tracks:[],codecs:[],availableBandwidth:0,streams:0,framerateMean:0,bitrateMean:0},recv:{tracks:[],codecs:[],availableBandwidth:0,streams:0,framerateMean:0,bitrateMean:0},bytesSent:0,bytesReceived:0,latency:0,packetsLost:0},bandwidth:{systemBandwidth:0,sentPerSecond:0,encodedPerSecond:0,helper:{audioBytesSent:0,videoBytestSent:0},speed:0},results:{},connectionType:{systemNetworkType:((navigator.connection||{}).type||"unknown").toString().toLowerCase(),systemIpAddress:"192.168.1.2",local:{candidateType:[],transport:[],ipAddress:[],networkType:[]},remote:{candidateType:[],transport:[],ipAddress:[],networkType:[]}},resolutions:{send:{width:0,height:0},recv:{width:0,height:0}},internal:{audio:{send:{},recv:{}},video:{send:{},recv:{}},candidates:{}},nomore:function(){c=!0}},r={checkIfOfferer:function(e){"googLibjingleSession"===e.type&&(l.isOfferer=e.googInitiator)}},d=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),s=this;if(!(arguments[0]instanceof a))throw"1st argument is not instance of RTCPeerConnection.";s=arguments[0],arguments[1]instanceof MediaStreamTrack&&(e=arguments[1],n=arguments[2],i=arguments[3]);var c=!1;r.datachannel=function(e){"datachannel"===e.type&&(l.datachannel={state:e.state})},r.googCertificate=function(e){"googCertificate"==e.type&&(l.encryption=e.googFingerprintAlgorithm),"certificate"==e.type&&(l.encryption=e.fingerprintAlgorithm)},r.checkAudioTracks=function(e){if("audio"===e.mediaType){var n=e.id.split("_").pop();if(!0===e.isRemote&&(n="recv"),!1===e.isRemote&&(n="send"),n){if(-1===l.audio[n].codecs.indexOf(e.googCodecName||"opus")&&l.audio[n].codecs.push(e.googCodecName||"opus"),e.bytesSent){var t=0;l.internal.audio[n].prevBytesSent||(l.internal.audio[n].prevBytesSent=e.bytesSent);var i=e.bytesSent-l.internal.audio[n].prevBytesSent;l.internal.audio[n].prevBytesSent=e.bytesSent,l.audio[n].availableBandwidth=(t=i/1024).toFixed(1),l.audio.bytesSent=t.toFixed(1)}e.bytesReceived&&(t=0,l.internal.audio[n].prevBytesReceived||(l.internal.audio[n].prevBytesReceived=e.bytesReceived),i=e.bytesReceived-l.internal.audio[n].prevBytesReceived,l.internal.audio[n].prevBytesReceived=e.bytesReceived,l.audio.bytesReceived=(t=i/1024).toFixed(1)),e.googTrackId&&-1===l.audio[n].tracks.indexOf(e.googTrackId)&&l.audio[n].tracks.push(e.googTrackId),e.googCurrentDelayMs&&(t=0,l.internal.audio.prevGoogCurrentDelayMs||(l.internal.audio.prevGoogCurrentDelayMs=e.googCurrentDelayMs),i=e.googCurrentDelayMs-l.internal.audio.prevGoogCurrentDelayMs,l.internal.audio.prevGoogCurrentDelayMs=e.googCurrentDelayMs,l.audio.latency=i.toFixed(1),l.audio.latency<0&&(l.audio.latency=0)),e.packetsLost&&(t=0,l.internal.audio.prevPacketsLost||(l.internal.audio.prevPacketsLost=e.packetsLost),i=e.packetsLost-l.internal.audio.prevPacketsLost,l.internal.audio.prevPacketsLost=e.packetsLost,l.audio.packetsLost=i.toFixed(1),l.audio.packetsLost<0&&(l.audio.packetsLost=0))}}},r.checkVideoTracks=function(e){if("video"===e.mediaType){var n=e.id.split("_").pop();if(!0===e.isRemote&&(n="recv"),!1===e.isRemote&&(n="send"),n){if(-1===l.video[n].codecs.indexOf(e.googCodecName||"VP8")&&l.video[n].codecs.push(e.googCodecName||"VP8"),e.bytesSent){var t=0;l.internal.video[n].prevBytesSent||(l.internal.video[n].prevBytesSent=e.bytesSent);var i=e.bytesSent-l.internal.video[n].prevBytesSent;l.internal.video[n].prevBytesSent=e.bytesSent,l.video[n].availableBandwidth=(t=i/1024).toFixed(1),l.video.bytesSent=t.toFixed(1)}e.bytesReceived&&(t=0,l.internal.video[n].prevBytesReceived||(l.internal.video[n].prevBytesReceived=e.bytesReceived),i=e.bytesReceived-l.internal.video[n].prevBytesReceived,l.internal.video[n].prevBytesReceived=e.bytesReceived,l.video.bytesReceived=(t=i/1024).toFixed(1)),e.googFrameHeightReceived&&e.googFrameWidthReceived&&(l.resolutions[n].width=e.googFrameWidthReceived,l.resolutions[n].height=e.googFrameHeightReceived),e.googFrameHeightSent&&e.googFrameWidthSent&&(l.resolutions[n].width=e.googFrameWidthSent,l.resolutions[n].height=e.googFrameHeightSent),e.googTrackId&&-1===l.video[n].tracks.indexOf(e.googTrackId)&&l.video[n].tracks.push(e.googTrackId),e.framerateMean&&(l.bandwidth.framerateMean=e.framerateMean,t=0,l.internal.video[n].prevFramerateMean||(l.internal.video[n].prevFramerateMean=e.bitrateMean),i=e.bytesSent-l.internal.video[n].prevFramerateMean,l.internal.video[n].prevFramerateMean=e.framerateMean,t=i/1024,l.video[n].framerateMean=i.toFixed(1)),e.bitrateMean&&(l.bandwidth.bitrateMean=e.bitrateMean,t=0,l.internal.video[n].prevBitrateMean||(l.internal.video[n].prevBitrateMean=e.bitrateMean),i=e.bytesSent-l.internal.video[n].prevBitrateMean,l.internal.video[n].prevBitrateMean=e.bitrateMean,t=i/1024,l.video[n].bitrateMean=i.toFixed(1)),e.googCurrentDelayMs&&(t=0,l.internal.video.prevGoogCurrentDelayMs||(l.internal.video.prevGoogCurrentDelayMs=e.googCurrentDelayMs),i=e.googCurrentDelayMs-l.internal.video.prevGoogCurrentDelayMs,l.internal.video.prevGoogCurrentDelayMs=e.googCurrentDelayMs,l.video.latency=i.toFixed(1),l.video.latency<0&&(l.video.latency=0)),e.packetsLost&&(t=0,l.internal.video.prevPacketsLost||(l.internal.video.prevPacketsLost=e.packetsLost),i=e.packetsLost-l.internal.video.prevPacketsLost,l.internal.video.prevPacketsLost=e.packetsLost,l.video.packetsLost=i.toFixed(1),l.video.packetsLost<0&&(l.video.packetsLost=0))}}},r.bweforvideo=function(e){"VideoBwe"===e.type&&(l.bandwidth.availableSendBandwidth=e.googAvailableSendBandwidth,l.bandwidth.googActualEncBitrate=e.googActualEncBitrate,l.bandwidth.googAvailableSendBandwidth=e.googAvailableSendBandwidth,l.bandwidth.googAvailableReceiveBandwidth=e.googAvailableReceiveBandwidth,l.bandwidth.googRetransmitBitrate=e.googRetransmitBitrate,l.bandwidth.googTargetEncBitrate=e.googTargetEncBitrate,l.bandwidth.googBucketDelay=e.googBucketDelay,l.bandwidth.googTransmitBitrate=e.googTransmitBitrate)},r.candidatePair=function(e){if("googCandidatePair"===e.type||"candidate-pair"===e.type||"local-candidate"===e.type||"remote-candidate"===e.type){if("true"==e.googActiveConnection&&(Object.keys(l.internal.candidates).forEach(function(n){var t=l.internal.candidates[n];-1!==t.ipAddress.indexOf(e.googLocalAddress)&&(l.connectionType.local.candidateType=t.candidateType,l.connectionType.local.ipAddress=t.ipAddress,l.connectionType.local.networkType=t.networkType,l.connectionType.local.transport=t.transport),-1!==t.ipAddress.indexOf(e.googRemoteAddress)&&(l.connectionType.remote.candidateType=t.candidateType,l.connectionType.remote.ipAddress=t.ipAddress,l.connectionType.remote.networkType=t.networkType,l.connectionType.remote.transport=t.transport)}),l.connectionType.transport=e.googTransportType,(n=l.internal.candidates[e.localCandidateId])&&n.ipAddress&&(l.connectionType.systemIpAddress=n.ipAddress),(t=l.internal.candidates[e.remoteCandidateId])&&t.ipAddress&&(l.connectionType.systemIpAddress=t.ipAddress)),"candidate-pair"===e.type&&!0===e.selected&&!0===e.nominated&&"succeeded"===e.state)var n=l.internal.candidates[e.remoteCandidateId],t=l.internal.candidates[e.remoteCandidateId];if("local-candidate"===e.type&&(l.connectionType.local.candidateType=e.candidateType,l.connectionType.local.ipAddress=e.ipAddress,l.connectionType.local.networkType=e.networkType,l.connectionType.local.transport=e.mozLocalTransport||e.transport),"remote-candidate"===e.type&&(l.connectionType.remote.candidateType=e.candidateType,l.connectionType.remote.ipAddress=e.ipAddress,l.connectionType.remote.networkType=e.networkType,l.connectionType.remote.transport=e.mozRemoteTransport||e.transport),d){var i=e.localCandidateId?"send":"recv";if(!i)return;if(e.bytesSent){var o=0;l.internal.video[i].prevBytesSent||(l.internal.video[i].prevBytesSent=e.bytesSent);var a=e.bytesSent-l.internal.video[i].prevBytesSent;l.internal.video[i].prevBytesSent=e.bytesSent,l.video[i].availableBandwidth=(o=a/1024).toFixed(1),l.video.bytesSent=o.toFixed(1)}e.bytesReceived&&(o=0,l.internal.video[i].prevBytesReceived||(l.internal.video[i].prevBytesReceived=e.bytesReceived),a=e.bytesReceived-l.internal.video[i].prevBytesReceived,l.internal.video[i].prevBytesReceived=e.bytesReceived,l.video.bytesReceived=(o=a/1024).toFixed(1)),e.availableOutgoingBitrate&&(o=0,l.internal.video[i].prevAvailableOutgoingBitrate||(l.internal.video[i].prevAvailableOutgoingBitrate=e.availableOutgoingBitrate),a=e.availableOutgoingBitrate-l.internal.video[i].prevAvailableOutgoingBitrate,l.internal.video[i].prevAvailableOutgoingBitrate=e.availableOutgoingBitrate,l.video.availableOutgoingBitrate=(o=a/1024).toFixed(1)),e.availableIncomingBitrate&&(o=0,l.internal.video[i].prevAvailableIncomingBitrate||(l.internal.video[i].prevAvailableIncomingBitrate=e.availableIncomingBitrate),a=e.availableIncomingBitrate-l.internal.video[i].prevAvailableIncomingBitrate,l.internal.video[i].prevAvailableIncomingBitrate=e.availableIncomingBitrate,l.video.availableIncomingBitrate=(o=a/1024).toFixed(1))}}};var u={},p={},v={},y={};r.localcandidate=function(e){"localcandidate"!==e.type&&"local-candidate"!==e.type||e.id&&(u[e.id]||(u[e.id]=[]),p[e.id]||(p[e.id]=[]),v[e.id]||(v[e.id]=[]),y[e.id]||(y[e.id]=[]),e.candidateType&&-1===u[e.id].indexOf(e.candidateType)&&u[e.id].push(e.candidateType),e.transport&&-1===p[e.id].indexOf(e.transport)&&p[e.id].push(e.transport),e.ipAddress&&-1===v[e.id].indexOf(e.ipAddress+":"+e.portNumber)&&v[e.id].push(e.ipAddress+":"+e.portNumber),e.networkType&&-1===y[e.id].indexOf(e.networkType)&&y[e.id].push(e.networkType),l.internal.candidates[e.id]={candidateType:u[e.id],ipAddress:v[e.id],portNumber:e.portNumber,networkType:y[e.id],priority:e.priority,transport:p[e.id],timestamp:e.timestamp,id:e.id,type:e.type},l.connectionType.local.candidateType=u[e.id],l.connectionType.local.ipAddress=v[e.id],l.connectionType.local.networkType=y[e.id],l.connectionType.local.transport=p[e.id])};var b={},g={},m={},h={};r.remotecandidate=function(e){"remotecandidate"!==e.type&&"remote-candidate"!==e.type||e.id&&(b[e.id]||(b[e.id]=[]),g[e.id]||(g[e.id]=[]),m[e.id]||(m[e.id]=[]),h[e.id]||(h[e.id]=[]),e.candidateType&&-1===b[e.id].indexOf(e.candidateType)&&b[e.id].push(e.candidateType),e.transport&&-1===g[e.id].indexOf(e.transport)&&g[e.id].push(e.transport),e.ipAddress&&-1===m[e.id].indexOf(e.ipAddress+":"+e.portNumber)&&m[e.id].push(e.ipAddress+":"+e.portNumber),e.networkType&&-1===h[e.id].indexOf(e.networkType)&&h[e.id].push(e.networkType),l.internal.candidates[e.id]={candidateType:b[e.id],ipAddress:m[e.id],portNumber:e.portNumber,networkType:h[e.id],priority:e.priority,transport:g[e.id],timestamp:e.timestamp,id:e.id,type:e.type},l.connectionType.remote.candidateType=b[e.id],l.connectionType.remote.ipAddress=m[e.id],l.connectionType.remote.networkType=h[e.id],l.connectionType.remote.transport=g[e.id])},r.dataSentReceived=function(e){!e.googCodecName||"video"!==e.mediaType&&"audio"!==e.mediaType||(e.bytesSent&&(l[e.mediaType].bytesSent=parseInt(e.bytesSent)),e.bytesReceived&&(l[e.mediaType].bytesReceived=parseInt(e.bytesReceived)))},r.inboundrtp=function(e){if(d&&"inbound-rtp"===e.type){var n=e.mediaType||"audio",t=e.isRemote?"recv":"send";if(t){if(e.bytesSent){var i=0;l.internal[n][t].prevBytesSent||(l.internal[n][t].prevBytesSent=e.bytesSent);var o=e.bytesSent-l.internal[n][t].prevBytesSent;l.internal[n][t].prevBytesSent=e.bytesSent,l[n][t].availableBandwidth=(i=o/1024).toFixed(1),l[n].bytesSent=i.toFixed(1)}e.bytesReceived&&(i=0,l.internal[n][t].prevBytesReceived||(l.internal[n][t].prevBytesReceived=e.bytesReceived),o=e.bytesReceived-l.internal[n][t].prevBytesReceived,l.internal[n][t].prevBytesReceived=e.bytesReceived,l[n].bytesReceived=(i=o/1024).toFixed(1))}}},r.outboundrtp=function(e){if(d&&"outbound-rtp"===e.type){var n=e.mediaType||"audio",t=e.isRemote?"recv":"send";if(t){if(e.bytesSent){var i=0;l.internal[n][t].prevBytesSent||(l.internal[n][t].prevBytesSent=e.bytesSent);var o=e.bytesSent-l.internal[n][t].prevBytesSent;l.internal[n][t].prevBytesSent=e.bytesSent,l[n][t].availableBandwidth=(i=o/1024).toFixed(1),l[n].bytesSent=i.toFixed(1)}e.bytesReceived&&(i=0,l.internal[n][t].prevBytesReceived||(l.internal[n][t].prevBytesReceived=e.bytesReceived),o=e.bytesReceived-l.internal[n][t].prevBytesReceived,l.internal[n][t].prevBytesReceived=e.bytesReceived,l[n].bytesReceived=(i=o/1024).toFixed(1))}}},r.track=function(e){if(d&&"track"===e.type){var n=!0===e.remoteSource?"send":"recv";e.frameWidth&&e.frameHeight&&(l.resolutions[n].width=e.frameWidth,l.resolutions[n].height=e.frameHeight)}};var f={audio:{send:[],recv:[]},video:{send:[],recv:[]}};r.ssrc=function(e){if(e.googCodecName&&("video"===e.mediaType||"audio"===e.mediaType)&&"ssrc"===e.type){var n=e.id.split("_").pop();-1===f[e.mediaType][n].indexOf(e.ssrc)&&f[e.mediaType][n].push(e.ssrc),l[e.mediaType][n].streams=f[e.mediaType][n].length}},function e(){var t;t=function(t){if(t&&t.forEach){t.forEach(function(e){Object.keys(r).forEach(function(n){if("function"==typeof r[n])try{r[n](e)}catch(t){console.error(t.message,t.stack,t)}})});try{-1!==s.iceConnectionState.search(/failed|closed|disconnected/gi)&&(c=!0)}catch(o){c=!0}!0===c&&(l.datachannel&&(l.datachannel.state="close"),l.ended=!0),l.results=t,l.audio&&l.video&&(l.bandwidth.speed=l.audio.bytesSent-l.bandwidth.helper.audioBytesSent+(l.video.bytesSent-l.bandwidth.helper.videoBytesSent),l.bandwidth.helper.audioBytesSent=l.audio.bytesSent,l.bandwidth.helper.videoBytesSent=l.video.bytesSent),n(l),c||null!=typeof i&&i&&setTimeout(e,i||1e3)}},void 0!==window.InstallTrigger||d?s.getStats(window.mediaStreamTrack||null).then(function(e){var n=[];e.forEach(function(e){n.push(e)}),t(n)}).catch(t):s.getStats(function(e){var n=[];e.result().forEach(function(e){var t={};e.names().forEach(function(n){t[n]=e.stat(n)}),t.id=e.id,t.type=e.type,t.timestamp=e.timestamp,n.push(t)}),t(n)})}()};e.exports=o,void 0===(i=(function(){return o}).apply(n,[]))||(e.exports=i)}).call(this,t("pCvA"))},RH4o:function(e,n,t){"use strict";t.r(n);var i=t("keVe"),o=function(){return function(){}}(),a=t("fYis"),l=t("mEgG"),r=t("bb6g"),d=t("1ob4"),s=t("6CUI"),c=t.n(s),u=t("ixZW"),p=t("JLJU"),v=t("4w17"),y=function(){function e(e,n,t,i){this.navigationService=e,this.route=n,this.web3Service=t,this.raidenService=i,this.publishing=!1,this.connections=0,this.maxConnections=25,this.bytesSend=[],this.users=[],this.tokenAddress="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}return Object.defineProperty(e.prototype,"mainVideoEl",{set:function(e){this.videoPlayer=e.nativeElement},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){return r.b(this,void 0,void 0,function(){var e;return r.e(this,function(n){switch(n.label){case 0:return this.navigationService.showBackButton=!0,this.id=this.route.snapshot.paramMap.get("id"),this.id?[3,2]:(e=this,[4,this.web3Service.provider.getSigner(0).getAddress()]);case 1:e.id=n.sent(),n.label=2;case 2:return[2]}})})},e.prototype.publish=function(){return r.b(this,void 0,void 0,function(){var e=this;return r.e(this,function(n){return this.peer=new c.a("NUTUBE_NETWORK_"+this.id),this.peer.on("open",function(){}),this.peer.on("error",function(e){console.error(e)}),this.peer.on("open",function(){console.log("PeerID:",e.peer.id)}),this.peer.on("connection",function(e){console.log("connection",e),e.on("data",function(e){console.log("Data from connection",e)})}),this.peer.on("call",function(n){return r.b(e,void 0,void 0,function(){return r.e(this,function(e){return console.log("Income call",n),this.connections++,console.log("New connection",this.connections),this.connections<this.maxConnections?this.handleCall(n):console.log("To many connections. Call declined!",this.connections),[2]})})}),navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia({video:{width:{min:1024,ideal:1280,max:1920},height:{min:576,ideal:720,max:1080},facingMode:"user"},audio:!0},function(n){e.publishing=!0,e.videoPlayer.srcObject=n,e.videoPlayer.play(),e.stream=n},function(e){console.error("Failed to get local stream",e)}),[2]})})},e.prototype.stop=function(){this.peer.destroy(),this.publishing=!1,this.videoPlayer.pause(),this.stream.getTracks().map(function(e){e.stop()})},e.prototype.initStatus=function(e,n){var t=this;v(n,function(n){t.bytesSend[e]=n.video.bytesSent,console.log("User: "+e+" => "+n.video.bytesSent)},2e3)},e.prototype.handleCall=function(e){return r.b(this,void 0,void 0,function(){var n,t,i=this;return r.e(this,function(o){switch(o.label){case 0:this.users[e.peer]=this.web3Service.messageRecover(this.id,e.metadata),console.log("Address",this.users[e.peer]),o.label=1;case 1:return o.trys.push([1,4,,5]),"maniacs"===this.id?[3,3]:[4,this.raidenService.getChannels(this.tokenAddress,this.users[e.peer])];case 2:n=o.sent(),console.log("channels",n),o.label=3;case 3:return e.answer(this.stream),e.on("stream",function(e){}),e.on("error",function(e){console.log("Error",e),i.connections--}),e.on("close",function(){i.connections--,console.log("The videocall has finished",i.connections)}),this.initStatus(e.peer,e.peerConnection),[3,5];case 4:return t=o.sent(),console.log("Error",t),e.close(),[3,5];case 5:return[2]}})})},e}(),b=t("X+PR"),g=i.lb({encapsulation:0,styles:[[""]],data:{}});function m(e){return i.Bb(0,[i.yb(402653184,1,{mainVideoEl:0}),(e()(),i.nb(1,0,null,null,52,"div",[["class","container mt-4"]],null,null,null,null,null)),(e()(),i.nb(2,0,null,null,1,"h4",[],null,null,null,null,null)),(e()(),i.Ab(-1,null,["Start new live stream now:"])),(e()(),i.nb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(e()(),i.nb(5,0,null,null,48,"div",[["class","row justify-content-md-center"]],null,null,null,null,null)),(e()(),i.nb(6,0,null,null,47,"div",[["class","col-sm-6"]],null,null,null,null,null)),(e()(),i.nb(7,0,[[1,0],["videoPlayer",1]],null,1,"video",[["controls",""],["height","420"],["width","100%"]],[[8,"hidden",0]],null,null,null,null)),(e()(),i.Ab(-1,null,[" Your browser does not support the video tag. "])),(e()(),i.nb(9,0,null,null,0,"hr",[],[[8,"hidden",0]],null,null,null,null)),(e()(),i.nb(10,0,null,null,43,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(e,n,t){var o=!0;return"submit"===n&&(o=!1!==i.wb(e,12).onSubmit(t)&&o),"reset"===n&&(o=!1!==i.wb(e,12).onReset()&&o),o},null,null)),i.mb(11,16384,null,0,l.l,[],null,null),i.mb(12,4210688,null,0,l.g,[[8,null],[8,null]],null,null),i.xb(2048,null,l.a,null,[l.g]),i.mb(14,16384,null,0,l.f,[[4,l.a]],null,null),(e()(),i.nb(15,0,null,null,33,"div",[["class","form-group row"]],null,null,null,null,null)),(e()(),i.nb(16,0,null,null,1,"label",[["class","col-sm-3 col-form-label"],["for","maxConnections"]],null,null,null,null,null)),(e()(),i.Ab(-1,null,["Max. connections"])),(e()(),i.nb(18,0,null,null,30,"div",[["class","col-sm-9"]],null,null,null,null,null)),(e()(),i.nb(19,0,null,null,29,"select",[["class","form-control"],["id","maxConnections"],["name","maxConnections"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(e,n,t){var o=!0,a=e.component;return"change"===n&&(o=!1!==i.wb(e,20).onChange(t.target.value)&&o),"blur"===n&&(o=!1!==i.wb(e,20).onTouched()&&o),"ngModelChange"===n&&(o=!1!==(a.maxConnections=t)&&o),o},null,null)),i.mb(20,16384,null,0,l.j,[i.D,i.k],null,null),i.xb(1024,null,l.c,function(e){return[e]},[l.j]),i.mb(22,671744,null,0,l.h,[[2,l.a],[8,null],[8,null],[6,l.c]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),i.xb(2048,null,l.d,null,[l.h]),i.mb(24,16384,null,0,l.e,[[4,l.d]],null,null),(e()(),i.nb(25,0,null,null,3,"option",[["value","5"]],null,null,null,null,null)),i.mb(26,147456,null,0,l.i,[i.k,i.D,[2,l.j]],{value:[0,"value"]},null),i.mb(27,147456,null,0,l.n,[i.k,i.D,[8,null]],{value:[0,"value"]},null),(e()(),i.Ab(-1,null,["5"])),(e()(),i.nb(29,0,null,null,3,"option",[["value","10"]],null,null,null,null,null)),i.mb(30,147456,null,0,l.i,[i.k,i.D,[2,l.j]],{value:[0,"value"]},null),i.mb(31,147456,null,0,l.n,[i.k,i.D,[8,null]],{value:[0,"value"]},null),(e()(),i.Ab(-1,null,["10"])),(e()(),i.nb(33,0,null,null,3,"option",[["value","25"]],null,null,null,null,null)),i.mb(34,147456,null,0,l.i,[i.k,i.D,[2,l.j]],{value:[0,"value"]},null),i.mb(35,147456,null,0,l.n,[i.k,i.D,[8,null]],{value:[0,"value"]},null),(e()(),i.Ab(-1,null,["25"])),(e()(),i.nb(37,0,null,null,3,"option",[["value","50"]],null,null,null,null,null)),i.mb(38,147456,null,0,l.i,[i.k,i.D,[2,l.j]],{value:[0,"value"]},null),i.mb(39,147456,null,0,l.n,[i.k,i.D,[8,null]],{value:[0,"value"]},null),(e()(),i.Ab(-1,null,["50"])),(e()(),i.nb(41,0,null,null,3,"option",[["value","100"]],null,null,null,null,null)),i.mb(42,147456,null,0,l.i,[i.k,i.D,[2,l.j]],{value:[0,"value"]},null),i.mb(43,147456,null,0,l.n,[i.k,i.D,[8,null]],{value:[0,"value"]},null),(e()(),i.Ab(-1,null,["100"])),(e()(),i.nb(45,0,null,null,3,"option",[["value","250"]],null,null,null,null,null)),i.mb(46,147456,null,0,l.i,[i.k,i.D,[2,l.j]],{value:[0,"value"]},null),i.mb(47,147456,null,0,l.n,[i.k,i.D,[8,null]],{value:[0,"value"]},null),(e()(),i.Ab(-1,null,["250"])),(e()(),i.nb(49,0,null,null,4,"div",[["class","form-group row"]],null,null,null,null,null)),(e()(),i.nb(50,0,null,null,1,"button",[["class","btn btn-danger btn-lg"],["style","margin: 0 auto;"],["type","button"]],[[8,"hidden",0]],[[null,"click"]],function(e,n,t){var i=!0;return"click"===n&&(i=!1!==e.component.publish()&&i),i},null,null)),(e()(),i.Ab(-1,null,["Start "])),(e()(),i.nb(52,0,null,null,1,"button",[["class","btn btn-dark btn-lg"],["style","margin: 0 auto;"],["type","button"]],[[8,"hidden",0]],[[null,"click"]],function(e,n,t){var i=!0;return"click"===n&&(i=!1!==e.component.stop()&&i),i},null,null)),(e()(),i.Ab(-1,null,["Stop "]))],function(e,n){e(n,22,0,"maxConnections",n.component.maxConnections),e(n,26,0,"5"),e(n,27,0,"5"),e(n,30,0,"10"),e(n,31,0,"10"),e(n,34,0,"25"),e(n,35,0,"25"),e(n,38,0,"50"),e(n,39,0,"50"),e(n,42,0,"100"),e(n,43,0,"100"),e(n,46,0,"250"),e(n,47,0,"250")},function(e,n){var t=n.component;e(n,7,0,!t.publishing),e(n,9,0,!t.publishing),e(n,10,0,i.wb(n,14).ngClassUntouched,i.wb(n,14).ngClassTouched,i.wb(n,14).ngClassPristine,i.wb(n,14).ngClassDirty,i.wb(n,14).ngClassValid,i.wb(n,14).ngClassInvalid,i.wb(n,14).ngClassPending),e(n,19,0,i.wb(n,24).ngClassUntouched,i.wb(n,24).ngClassTouched,i.wb(n,24).ngClassPristine,i.wb(n,24).ngClassDirty,i.wb(n,24).ngClassValid,i.wb(n,24).ngClassInvalid,i.wb(n,24).ngClassPending),e(n,50,0,t.publishing),e(n,52,0,!t.publishing)})}function h(e){return i.Bb(0,[(e()(),i.nb(0,0,null,null,1,"app-publish",[],null,null,null,m,g)),i.mb(1,114688,null,0,y,[d.a,b.a,u.a,p.a],null,null)],function(e,n){e(n,1,0)},null)}var f=i.jb("app-publish",y,h,{},{},[]),w=t("TOqr"),T=t("KMzP"),k=function(){return function(){}}();t.d(n,"PublishModuleNgFactory",function(){return S});var S=i.kb(o,[],function(e){return i.tb([i.ub(512,i.j,i.ab,[[8,[a.a,f]],[3,i.j],i.x]),i.ub(4608,w.i,w.h,[i.u,[2,w.o]]),i.ub(4608,l.m,l.m,[]),i.ub(1073742336,w.b,w.b,[]),i.ub(1073742336,l.k,l.k,[]),i.ub(1073742336,l.b,l.b,[]),i.ub(1073742336,T.f,T.f,[]),i.ub(1073742336,b.n,b.n,[[2,b.t],[2,b.k]]),i.ub(1073742336,k,k,[]),i.ub(1073742336,o,o,[]),i.ub(1024,b.i,function(){return[[{path:"",component:y}]]},[])])})}}]);