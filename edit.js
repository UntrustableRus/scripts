if (window.location.hostname == 'scriptcentral.glitch.me' || 'v4.tetretalk.com' || 'tetretalk.com') {
noPayloads();
} else if (document.body.contentEditable !== 'true') {
document.body.contentEditable='true'; document.designMode='on'; 
} else {
document.body.contentEditable='false'; document.designMode='off'; 
}
