"use strict";

const btn = $('.navbar_btn');
const nav = $('.navbar_list');

btn.on('click', () => {
    nav.toggleClass('hidden');
})

// date picker
$('#dates').daterangepicker();