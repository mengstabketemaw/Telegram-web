!("requestVideoFrameCallback"in HTMLVideoElement.prototype)&&"getVideoPlaybackQuality"in HTMLVideoElement.prototype&&(HTMLVideoElement.prototype._rvfcpolyfillmap={},HTMLVideoElement.prototype.requestVideoFrameCallback=function(t){const o=this.getVideoPlaybackQuality(),c=this.mozPresentedFrames||this.mozPaintedFrames||o.totalVideoFrames-o.droppedVideoFrames,s=(l,e)=>{const r=this.getVideoPlaybackQuality(),m=this.mozPresentedFrames||this.mozPaintedFrames||r.totalVideoFrames-r.droppedVideoFrames;if(m>c){const a=this.mozFrameDelay||r.totalFrameDelay-o.totalFrameDelay||0,n=e-l;t(e,{presentationTime:e+a*1e3,expectedDisplayTime:e+n,width:this.videoWidth,height:this.videoHeight,mediaTime:Math.max(0,this.currentTime||0)+n/1e3,presentedFrames:m,processingDuration:a}),delete this._rvfcpolyfillmap[i]}else this._rvfcpolyfillmap[i]=requestAnimationFrame(a=>s(e,a))},i=Date.now(),d=performance.now();return this._rvfcpolyfillmap[i]=requestAnimationFrame(l=>s(d,l)),i},HTMLVideoElement.prototype.cancelVideoFrameCallback=function(t){cancelAnimationFrame(this._rvfcpolyfillmap[t]),delete this._rvfcpolyfillmap[t]});
//# sourceMappingURL=requestVideoFrameCallbackPolyfill-GsYXQx88.js.map
