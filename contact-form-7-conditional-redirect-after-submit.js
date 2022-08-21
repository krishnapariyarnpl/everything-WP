   document.addEventListener( 'wpcf7mailsent', function( event ) {
   console.log(event.detail);   
   if ( '16154' == event.detail.contactFormId ) { 
        console.log(event.detail.inputs[5].value);
        if (event.detail.inputs[4].value == 'example1') {
           location = 'https://example.com/thank-you-1/';
        }
        if (event.detail.inputs[4].value == 'example1') {
           location = 'https://example.com/thank-you-2';
        }
        if (event.detail.inputs[4].value == 'example1') {
           location = 'https://example.com/thank-you-3';
        }
	   if (event.detail.inputs[4].value == 'example1') {
           location = 'https://example.com/thank-you-4';
        }
	   if (event.detail.inputs[4].value == 'example1') {
           location = 'https://example.com/thank-you-5';
        }
	   if (event.detail.inputs[4].value == 'example1') {
           location = 'https://example.com/thank-you-6';
        }

    } 
   }, false );