(function(a){a(function(){a('#coderockz_woo_delivery_delivery_date_filter').selectWoo({dropdownCssClass:'coderockz-order-page-filter-no-search',placeholder:'Filter by Delivery/Pickup Date'}),a('#coderockz_woo_delivery_delivery_type_filter').selectWoo({dropdownCssClass:'coderockz-order-page-filter-no-search',placeholder:'Filter by Delivery Type'}),a('#coderockz_woo_delivery_delivery_date_filter').change(function(b){b.preventDefault(),a('#coderockz_woo_delivery_delivery_date_filter option:selected').val()=='custom'?(a('#coderockz_woo_delivery_custom_start_date_filter').show(),a('#coderockz_woo_delivery_custom_end_date_filter').show()):(a('#coderockz_woo_delivery_custom_start_date_filter').hide(),a('#coderockz_woo_delivery_custom_end_date_filter').hide());}),a('#coderockz_woo_delivery_delivery_date_filter option:selected').val()=='custom'?(a('#coderockz_woo_delivery_custom_start_date_filter').show(),a('#coderockz_woo_delivery_custom_end_date_filter').show()):(a('#coderockz_woo_delivery_custom_start_date_filter').hide(),a('#coderockz_woo_delivery_custom_end_date_filter').hide()),a(document).on('keyup input','#coderockz_woo_delivery_custom_end_date_filter',function(c){if(c.preventDefault(),a('#coderockz_woo_delivery_custom_start_date_filter').val()=='')alert('Please enter the start date first'),a(this).val('');else if(a('#coderockz_woo_delivery_custom_start_date_filter').val().length<10)alert('Please enter the start date with correct format'),a('#coderockz_woo_delivery_custom_start_date_filter').val(''),a(this).val('');else{var b=a(this).val().length;b==10&&(endDate=a(this).val().split('-'),startDate=a('#coderockz_woo_delivery_custom_start_date_filter').val().split('-'),endDate[0]<startDate[0]&&(alert('Enter a end year that is after start year'),a(this).val('')),endDate[1]<startDate[1]&&(alert('Enter a end month that is after start month'),a(this).val('')),endDate[2]<startDate[2]&&endDate[1]<=startDate[1]&&(alert('Enter a end date that is after start date'),a(this).val('')));}});var b=a('#coderockz_woo_delivery_deactive_plugin-modal');var d='';a(document).on('click','a.coderockz-woo-delivery-deactivate-link',function(c){c.preventDefault(),b.addClass('modal-active'),d=a(this).attr('href'),b.find('a.coderockz-woo-delivery-skip-deactivate').attr('href',d).css('float','right');}),b.on('click','.coderockz-woo-delivery-cancel-button',function(a){a.preventDefault(),b.removeClass('modal-active');}),b.on('click','input[type="radio"]',function(){var c=a(this).parents('li:first');b.find('.reason-input').remove();var d=c.data('type'),e=c.data('placeholder'),f='<div class="reason-input">'+('text'===d?'<input type="text" size="40" />':'<textarea rows="5" cols="45"></textarea>')+'</div>';d!==''&&(c.append(a(f)),c.find('input, textarea').attr('placeholder',e).focus());}),b.on('click','.coderockz-woo-delivery-deactivate-button',function(h){h.preventDefault();var c=a(this);if(c.hasClass('disabled'))return;var e=a('input[type="radio"]:checked',b);var g=e.parents('li:first'),f=g.find('textarea, input[type="text"]');a.ajax({url:coderockz_woo_delivery_ajax_obj.coderockz_woo_delivery_ajax_url,type:'POST',data:{_ajax_nonce:coderockz_woo_delivery_ajax_obj.nonce,action:'coderockz-woo-delivery-submit-deactivate-reason',reason_id:0===e.length?'none':e.val(),reason_info:0!==f.length?f.val().trim():''},beforeSend:function(){c.addClass('disabled'),c.text('Processing...');},complete:function(a){window.location.href=d;},error:function(a){}});}),a(document).on('click','.coderockz-woo-delivery-review-notice ul li:nth-child(odd) a',function(c){c.preventDefault();let b=a(this).attr('val');a('.coderockz-woo-delivery-review-notice').slideUp(200,'linear'),a.ajax({url:coderockz_woo_delivery_ajax_obj.coderockz_woo_delivery_ajax_url,type:'post',data:{_ajax_nonce:coderockz_woo_delivery_ajax_obj.nonce,action:'coderockz_woo_delivery_save_review_notice',notice:b},success:function(a){}});}),a('#coderockz-woo-delivery-customer-rating').emojiRating({fontSize:32,onUpdate:function(){}});var c=a('#coderockz_woo_delivery_customer_review_plugin-modal');a(document).on('click','a.coderockz-woo-delivery-review-request-btn',function(b){b.preventDefault(),c.addClass('modal-active'),a('.jqEmoji').trigger('click'),a('.emoji-rating').val('5'),givenNotice=a(this).attr('val');}),c.on('click','.coderockz-woo-delivery-cancel-button',function(a){a.preventDefault(),c.removeClass('modal-active');}),c.on('click','.coderockz-woo-delivery-submit-review-button',function(f){f.preventDefault();var b=a(this);if(b.hasClass('disabled'))return;var d=a('.emoji-rating').val();var e=a('#coderockz-woo-delivery-customer-review').val();a.ajax({url:coderockz_woo_delivery_ajax_obj.coderockz_woo_delivery_ajax_url,type:'POST',data:{_ajax_nonce:coderockz_woo_delivery_ajax_obj.nonce,action:'coderockz-woo-delivery-submit-review',rating:d,review:e,notice:givenNotice},beforeSend:function(){b.addClass('disabled'),b.text('Processing...');},complete:function(b){a('.coderockz-woo-delivery-review-notice').slideUp(200,'linear'),c.removeClass('modal-active');},error:function(a){}});}),a(document).on('click','#doaction, #doaction2',function(f){var c=a(this).attr('id').substr(2);var d=a('select[name="'+c+'"]').val();if(d==='coderockz_bulk_delivery_completed'){f.preventDefault();var b=[];if(a('tbody th.check-column input[type="checkbox"]:checked').each(function(){b.push(a(this).val());}),!b.length)return alert('You have to select orders first!'),!1;var e=b.join(',');a.ajax({url:coderockz_woo_delivery_ajax_obj.coderockz_woo_delivery_ajax_url,type:'post',data:{_ajax_nonce:coderockz_woo_delivery_ajax_obj.nonce,action:'coderockz_woo_delivery_make_delivery_completed_bulk',orderIds:e},success:function(a){location.reload();}});}});});}(jQuery));