document.addEventListener('DOMContentLoaded',function(){function c(){jQuery('.coderockz-woo-delivery-loading-image').fadeIn(),jQuery.when(jQuery.ajax({url:coderockz_woo_delivery_ajax_obj.coderockz_woo_delivery_ajax_url,type:'post',data:{_ajax_nonce:coderockz_woo_delivery_ajax_obj.nonce,action:'coderockz_woo_delivery_get_order_details_for_delivery_calender',filteredDeliveryType:h,filteredFilterType:i,filteredStatusType:d},success:function(a){a.success&&(calendarData=a.data.orders,timezone=a.data.timezone);}})).then(function(e){var a=timezone;var b='en';var c=document.getElementById('coderockz-woo-delivery-delivery-calendar');var d=new FullCalendar.Calendar(c,{timeZone:a,locale:b,headerToolbar:{left:'prev,next today',center:'title',right:'dayGridMonth,listDay,listWeek,listMonth'},views:{listDay:{buttonText:'Today'},listWeek:{buttonText:'This Week'},listMonth:{buttonText:'This Month'}},allDayText:'',allDaySlot:!1,initialView:'dayGridMonth',dayMaxEvents:!0,events:calendarData,eventTimeFormat:{hour:'2-digit',minute:'2-digit',hour12:!1}});d.render();}),jQuery('.coderockz-woo-delivery-loading-image').fadeOut();}var b=jQuery('#coderockz_woo_delivery_calendar_filter_section').data('animation_background');if(typeof b!==typeof undefined&&b!==!1){var e=b.red;var f=b.green;var g=b.blue;}else{var e;var f;var g;}var a='';a+='<div class="coderockz-woo-delivery-loading-image" style="background-color:rgba('+e+','+f+','+g+', 0.6)!important">',a+='<div class="coderockz-woo-delivery-loading-gif">',a+='<img src="'+jQuery('#coderockz_woo_delivery_calendar_filter_section').data('animation_path')+'" alt="" style="max-width:60px!important"/>',a+='</div>',a+='</div>',jQuery('#coderockz_woo_delivery_calendar_filter_section').append(a);var h='';var i='';var d=['processing','on-hold','completed','pending'];jQuery('#coderockz_woo_delivery_calendar_delivery_type_filter').selectWoo({dropdownCssClass:'coderockz-order-page-filter-no-search',placeholder:'Filter by Delivery Type'}),jQuery('#coderockz_woo_delivery_calendar_filter_type_filter').selectWoo({dropdownCssClass:'coderockz-order-page-filter-no-search',placeholder:'Filter by Order/Products'}),jQuery('.coderockz_woo_delivery_calendar_order_status_filter').selectize({placeholder:'Filter by Order Status',plugins:['remove_button'],render:{item:function(a,b){return'<div class="item coderockz_woo_delivery_calendar_order_status_filter_item">'+b(a.text)+'</div>';}}}),jQuery(document).on('change','#coderockz_woo_delivery_calendar_delivery_type_filter',function(a){h=jQuery(this).val(),c();}),jQuery(document).on('change','#coderockz_woo_delivery_calendar_filter_type_filter',function(a){i=jQuery(this).val(),c();}),jQuery(document).on('change','#coderockz_woo_delivery_calendar_order_status_filter',function(a){jQuery(this).val()!=null?d=jQuery(this).val():d=['processing','on-hold','completed','pending'],c();}),c();});