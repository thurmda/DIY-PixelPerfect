javascript:!function(d,i, u){
	if (i=d.getElementById('DIY-PixelPerfect')){
		if(u=prompt('Enter_a_new_mockup_URL_or_cancel_to_remove')){
			i.src=u;
		}else{i.parentElement.removeChild(i);}
	}else{
		(i=d.createElement('img')).id='DIY-PixelPerfect';
		i.setAttribute('style','z-index:1000;display:block;position:absolute;top:0px;left:0px;opacity:.8');
		i.title='[R-click] &gt; Inspect Element &gt; Do your thing.';
		i.src=prompt('Enter_the_URL_of_your_mockup_(or_you_get_the_cat!)') || 'http://a248.e.akamai.net/assets.github.com/images/modules/404/parallax_octocat.png';
		d.body.appendChild(i);
	}
}(document)
