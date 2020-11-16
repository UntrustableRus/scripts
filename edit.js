if (window.location.hostname == 'scriptcentral.glitch.me' || window.location.hostname == 'v4.tetretalk.com' || window.location.hostname == 'tetretalk.dev') {
noPayloads();
} else if (document.body.contentEditable !== 'true') {
document.body.contentEditable='true'; document.designMode='on'; 
} else {
document.body.contentEditable='false'; document.designMode='off'; 
}
