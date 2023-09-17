if (document.querySelector('#OnlineStoreEditorData')) {
    
    (async () => {
       // const response = await fetch('/apps/shopify-store-editor-ai-proxy/htmlscript');
       // const html = await response.text();

       const html = `
       <button class="shopify-store-editor-ai-activate-button">
    <?xml version="1.0" encoding="UTF-8"?>
    <svg id="shopify-store-editor-ai-modal-close-button-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="41px" viewBox="0 0 40 41" version="1.1">
    <g id="surface1">
    <path id="shopify-store-editor-ai-modal-close-button-svg-path" style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 3.316406 31.964844 C 2.105469 34.875 0.46875 37.632812 0 40.539062 L 1.691406 40.394531 C 4.363281 32.710938 6.773438 27.546875 11.996094 21.085938 C 15.914062 16.242188 20.167969 12.390625 25.621094 9.332031 C 28.523438 7.703125 32.242188 5.917969 35.589844 5.46875 C 36.503906 5.34375 37.429688 5.308594 38.378906 5.390625 C 28.019531 7.734375 19.820312 13.164062 13.265625 21.304688 C 10.589844 24.625 8.265625 28.316406 6.128906 32.203125 L 10.066406 32.914062 L 8.425781 32.105469 L 14.292969 31.183594 C 12.113281 30.425781 9.964844 30.679688 9.273438 29.859375 C 15.3125 29.589844 20.273438 28.304688 23.757812 25.800781 C 22.460938 25.617188 20.964844 25.460938 20.1875 25.09375 C 26.023438 23.144531 29.398438 19.636719 33.683594 16.523438 C 28.117188 17.675781 22.964844 17.492188 21.476562 16.441406 C 31.296875 17.160156 37.640625 14.480469 39.816406 7.710938 C 40.003906 6.980469 40.054688 6.246094 39.9375 5.5 C 39.175781 0.664062 30.515625 -0.96875 27.695312 2.996094 C 27.132812 3.789062 26.335938 4.515625 25.679688 5.4375 L 28.363281 0.460938 C 21.144531 2.875 20.550781 5.53125 16.816406 13.535156 C 17.113281 11.101562 17.796875 8.894531 18.683594 6.808594 C 9.664062 10.25 6.660156 18.910156 6.175781 26.277344 C 5.914062 23.710938 6.398438 20.480469 7.328125 16.855469 C 4.695312 19.464844 2.902344 22.527344 3.542969 26.898438 L 2.339844 26.367188 L 2.972656 28.707031 L 1.171875 27.863281 Z M 3.316406 31.964844 "/>
    </g>
    </svg>
    
    
    
   </button>
   
   <div id="shopify-store-editor-ai-modal" class="shopify-store-editor-ai-modal">
       <div id="form-box" class="shopify-store-editor-ai-form font-roboto">
   
           <!--HEADER-->
           <div id="header" class="flex flex-row items-center justify-between border-b-1 px-6 py-4">
               <div class="flex justify-center items-center">
              <!--    <svg class="w-11 h-11 px-[0.25rem]" focusable="false" aria-hidden="true" viewBox="0 0 32 32">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M2.69648 24.8891C0.938383 22.2579 0 19.1645 0 16C0 11.7566 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7566 0 16 0C19.1645 0 22.2579 0.938383 24.8891 2.69648C27.5203 4.45459 29.5711 6.95344 30.7821 9.87706C31.9931 12.8007 32.3099 16.0177 31.6926 19.1214C31.0752 22.2251 29.5514 25.0761 27.3137 27.3137C25.0761 29.5514 22.2251 31.0752 19.1214 31.6926C16.0177 32.3099 12.8007 31.9931 9.87706 30.7821C6.95344 29.5711 4.45459 27.5203 2.69648 24.8891ZM12.0006 9.33281H9.33437V22.6665H12.0006V9.33281ZM22.6657 9.33281H14.6669V11.9991H22.6657V9.33281ZM22.6657 14.6654H14.6669V17.3316H22.6657V14.6654ZM22.6657 20.0003H14.6669V22.6665H22.6657V20.0003Z"></path>
                   </svg> -->
                   <div class="font-bold text-xl px-[0.25rem]">WriteBoost AI</div>
               </div>
   
               <div  class="flex justify-center items-center">
                   <button id="shopify-store-editor-ai-modal-close-button" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                       <svg id="shopify-store-editor-ai-modal-close-button-svg" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path id="shopify-store-editor-ai-modal-close-button-svg-path" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                       </svg>
                       <span class="sr-only">Close modal</span>
                   </button>
               </div>
           </div>  
   
           <!--BODY-->
           <div id="body1" class="px-6 pb-4">
   
               <div id="current-text-box" class="pt-7 mb-5">
                   <textarea id="current-text" rows="4" class="block p-6 w-full text-sm text-gray-900 bg-gray-50 border-none outline-none shadow-none" placeholder="Your message..."></textarea>
                   <span class="text-xs text-gray-600">
                       Text generated by AI may be inaccurate or offensive.
                   </span>
               </div>
               <div id="utility-buttons" class="flex flex-wrap w-[90%]">
                   <div id="utility-button-container" class="">
                       <button onclick="generateText('Simplify the language of the following: ')" id="utility-button" class="flex flex-row justify-center items-center my-1.5 mx-1.5 pl-2 pr-3.5 py-1 border-1 rounded-full">
                           <svg class="w-6 h-6 p-1" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C6.40326 5 5.83097 5.23705 5.40901 5.65901C4.98705 6.08097 4.75 6.65326 4.75 7.25V18.4393L7.46967 15.7197C7.61032 15.579 7.80109 15.5 8 15.5H17C17.5967 15.5 18.169 15.2629 18.591 14.841C19.0129 14.419 19.25 13.8467 19.25 13.25V7.25C19.25 6.65326 19.0129 6.08097 18.591 5.65901C18.169 5.23705 17.5967 5 17 5H7ZM4.34835 4.59835C5.05161 3.89509 6.00544 3.5 7 3.5H17C17.9946 3.5 18.9484 3.89509 19.6516 4.59835C20.3549 5.30161 20.75 6.25544 20.75 7.25V13.25C20.75 14.2446 20.3549 15.1984 19.6516 15.9017C18.9484 16.6049 17.9946 17 17 17H8.31066L4.53033 20.7803C4.31583 20.9948 3.99324 21.059 3.71299 20.9429C3.43273 20.8268 3.25 20.5533 3.25 20.25V7.25C3.25 6.25544 3.64509 5.30161 4.34835 4.59835Z"></path>
                           </svg>
                           <span class="text-sm text-gray-600">Simplify language</span>
                       </button>
                   </div>
   
                   <div id="utility-button-container" class="">
                       <button onclick="generateText('Make the following longer: ')" id="utility-button" class="flex flex-row justify-center items-center my-1.5 mx-1.5 pl-2 pr-3.5 py-1 border-1 rounded-full">
                           <svg class="w-6 h-6 p-1" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53033 8.46967C4.82322 8.76256 4.82322 9.23744 4.53033 9.53033L2.06066 12L4.53033 14.4697C4.82322 14.7626 4.82322 15.2374 4.53033 15.5303C4.23744 15.8232 3.76256 15.8232 3.46967 15.5303L0.46967 12.5303C0.176777 12.2374 0.176777 11.7626 0.46967 11.4697L3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967Z">
                               </path>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967L23.5303 11.4697C23.8232 11.7626 23.8232 12.2374 23.5303 12.5303L20.5303 15.5303C20.2374 15.8232 19.7626 15.8232 19.4697 15.5303C19.1768 15.2374 19.1768 14.7626 19.4697 14.4697L21.9393 12L19.4697 9.53033C19.1768 9.23744 19.1768 8.76256 19.4697 8.46967Z">
                               </path>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 12C0.25 11.5858 0.585786 11.25 1 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H1C0.585786 12.75 0.25 12.4142 0.25 12Z">
                               </path>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 12C13.25 11.5858 13.5858 11.25 14 11.25L23 11.25C23.4142 11.25 23.75 11.5858 23.75 12C23.75 12.4142 23.4142 12.75 23 12.75L14 12.75C13.5858 12.75 13.25 12.4142 13.25 12Z">
                               </path>
                               </svg>
                           <span class="text-sm text-gray-600">Make it longer</span>
                       </button>
                   </div>
   
                   <div id="utility-button-container" class="">
                       <button onclick="generateText('Make the following shorter: ')" id="utility-button" class="flex flex-row justify-center items-center my-1.5 mx-1.5 pl-2 pr-3.5 py-1 border-1 rounded-full">
                           <svg class="w-6 h-6 p-1" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 15.5303C6.17678 15.2374 6.17678 14.7626 6.46967 14.4697L8.93934 12L6.46967 9.53033C6.17678 9.23744 6.17678 8.76256 6.46967 8.46967C6.76256 8.17678 7.23744 8.17678 7.53033 8.46967L10.5303 11.4697C10.8232 11.7626 10.8232 12.2374 10.5303 12.5303L7.53033 15.5303C7.23744 15.8232 6.76256 15.8232 6.46967 15.5303Z">
                               </path>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 15.5303C17.2374 15.8232 16.7626 15.8232 16.4697 15.5303L13.4697 12.5303C13.1768 12.2374 13.1768 11.7626 13.4697 11.4697L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967C17.8232 8.76256 17.8232 9.23744 17.5303 9.53033L15.0607 12L17.5303 14.4697C17.8232 14.7626 17.8232 15.2374 17.5303 15.5303Z">
                               </path>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 12C10.75 12.4142 10.4142 12.75 10 12.75L1 12.75C0.585787 12.75 0.25 12.4142 0.25 12C0.25 11.5858 0.585787 11.25 1 11.25L10 11.25C10.4142 11.25 10.75 11.5858 10.75 12Z">
                               </path>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M23.75 12C23.75 12.4142 23.4142 12.75 23 12.75H14C13.5858 12.75 13.25 12.4142 13.25 12C13.25 11.5858 13.5858 11.25 14 11.25H23C23.4142 11.25 23.75 11.5858 23.75 12Z">
                               </path>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0303 9.21967C17.3232 9.51256 17.3232 9.98744 17.0303 10.2803L14.5607 12.75L17.0303 15.2197C17.3232 15.5126 17.3232 15.9874 17.0303 16.2803C16.7374 16.5732 16.2626 16.5732 15.9697 16.2803L12.9697 13.2803C12.6768 12.9874 12.6768 12.5126 12.9697 12.2197L15.9697 9.21967C16.2626 8.92678 16.7374 8.92678 17.0303 9.21967Z">
                               </path>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96967 9.21967C6.26256 8.92678 6.73744 8.92678 7.03033 9.21967L10.0303 12.2197C10.3232 12.5126 10.3232 12.9874 10.0303 13.2803L7.03033 16.2803C6.73744 16.5732 6.26256 16.5732 5.96967 16.2803C5.67678 15.9874 5.67678 15.5126 5.96967 15.2197L8.43934 12.75L5.96967 10.2803C5.67678 9.98744 5.67678 9.51256 5.96967 9.21967Z">
                               </path>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 12.75C12.75 12.3358 13.0858 12 13.5 12H22.25C22.6642 12 23 12.3358 23 12.75C23 13.1642 22.6642 13.5 22.25 13.5H13.5C13.0858 13.5 12.75 13.1642 12.75 12.75Z">
                               </path>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.75C3.62117e-08 12.3358 0.335786 12 0.75 12L9.5 12C9.91421 12 10.25 12.3358 10.25 12.75C10.25 13.1642 9.91421 13.5 9.5 13.5L0.75 13.5C0.335786 13.5 -3.62117e-08 13.1642 0 12.75Z">
                               </path>
                           </svg>
                           <span class="text-sm text-gray-600">Make it shorter</span>
                       </button>
                   </div>
   
                   <div id="utility-button-container" class="">
                       <button onclick="generateText('Fix the spelling and grammar of the following: ')" id="utility-button" class="flex flex-row justify-center items-center my-1.5 mx-1.5 pl-2 pr-3.5 py-1 border-1 rounded-full">
                           <svg class="w-6 h-6 p-1" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M18.25 3.25C18.6642 3.25 19 3.58579 19 4C19 4.33152 19.1317 4.64946 19.3661 4.88388C19.6005 5.1183 19.9185 5.25 20.25 5.25C20.6642 5.25 21 5.58579 21 6C21 6.41421 20.6642 6.75 20.25 6.75C19.9185 6.75 19.6005 6.8817 19.3661 7.11612C19.1317 7.35054 19 7.66848 19 8C19 8.41421 18.6642 8.75 18.25 8.75C17.8358 8.75 17.5 8.41421 17.5 8C17.5 7.66848 17.3683 7.35054 17.1339 7.11612C16.8995 6.8817 16.5815 6.75 16.25 6.75C15.8358 6.75 15.5 6.41421 15.5 6C15.5 5.58579 15.8358 5.25 16.25 5.25C16.5815 5.25 16.8995 5.1183 17.1339 4.88388C17.3683 4.64946 17.5 4.33152 17.5 4C17.5 3.58579 17.8358 3.25 18.25 3.25ZM18.25 5.88746C18.2318 5.90673 18.2133 5.92576 18.1945 5.94454C18.1758 5.96333 18.1567 5.98182 18.1375 6C18.1567 6.01819 18.1758 6.03667 18.1945 6.05546C18.2133 6.07424 18.2318 6.09327 18.25 6.11254C18.2682 6.09327 18.2867 6.07424 18.3055 6.05546C18.3242 6.03667 18.3433 6.01819 18.3625 6C18.3433 5.98182 18.3242 5.96333 18.3055 5.94454C18.2867 5.92576 18.2682 5.90673 18.25 5.88746ZM9.25 5.25C9.66421 5.25 10 5.58579 10 6C10 7.39239 10.5531 8.72774 11.5377 9.71231C12.5223 10.6969 13.8576 11.25 15.25 11.25C15.6642 11.25 16 11.5858 16 12C16 12.4142 15.6642 12.75 15.25 12.75C13.8576 12.75 12.5223 13.3031 11.5377 14.2877C10.5531 15.2723 10 16.6076 10 18C10 18.4142 9.66421 18.75 9.25 18.75C8.83579 18.75 8.5 18.4142 8.5 18C8.5 16.6076 7.94688 15.2723 6.96231 14.2877C5.97774 13.3031 4.64239 12.75 3.25 12.75C2.83579 12.75 2.5 12.4142 2.5 12C2.5 11.5858 2.83579 11.25 3.25 11.25C4.64239 11.25 5.97774 10.6969 6.96231 9.71231C7.94688 8.72774 8.5 7.39239 8.5 6C8.5 5.58579 8.83579 5.25 9.25 5.25ZM9.25 9.09234C8.93321 9.70704 8.52103 10.2749 8.02297 10.773C7.52491 11.271 6.95704 11.6832 6.34234 12C6.95704 12.3168 7.52491 12.729 8.02297 13.227C8.52103 13.7251 8.93321 14.293 9.25 14.9077C9.56679 14.293 9.97897 13.7251 10.477 13.227C10.9751 12.729 11.543 12.3168 12.1577 12C11.543 11.6832 10.9751 11.271 10.477 10.773C9.97897 10.2749 9.56679 9.70704 9.25 9.09234ZM18.25 15.25C18.6642 15.25 19 15.5858 19 16C19 16.3315 19.1317 16.6495 19.3661 16.8839C19.6005 17.1183 19.9185 17.25 20.25 17.25C20.6642 17.25 21 17.5858 21 18C21 18.4142 20.6642 18.75 20.25 18.75C19.9185 18.75 19.6005 18.8817 19.3661 19.1161C19.1317 19.3505 19 19.6685 19 20C19 20.4142 18.6642 20.75 18.25 20.75C17.8358 20.75 17.5 20.4142 17.5 20C17.5 19.6685 17.3683 19.3505 17.1339 19.1161C16.8995 18.8817 16.5815 18.75 16.25 18.75C15.8358 18.75 15.5 18.4142 15.5 18C15.5 17.5858 15.8358 17.25 16.25 17.25C16.5815 17.25 16.8995 17.1183 17.1339 16.8839C17.3683 16.6495 17.5 16.3315 17.5 16C17.5 15.5858 17.8358 15.25 18.25 15.25ZM18.25 17.8875C18.2318 17.9067 18.2133 17.9258 18.1945 17.9445C18.1758 17.9633 18.1567 17.9818 18.1375 18C18.1567 18.0182 18.1758 18.0367 18.1945 18.0555C18.2133 18.0742 18.2318 18.0933 18.25 18.1125C18.2682 18.0933 18.2867 18.0742 18.3055 18.0555C18.3242 18.0367 18.3433 18.0182 18.3625 18C18.3433 17.9818 18.3242 17.9633 18.3055 17.9445C18.2867 17.9258 18.2682 17.9067 18.25 17.8875Z"></path>
                           </svg>
                           <span class="text-sm text-gray-600">Fix spelling and Grammar</span>
                       </button>
                   </div>
               </div>
   
               <div id="drop-down-menus" class="flex items-center mt-5">
                   <div id="drop-down-menu-container" class="border border-gray-300 pl-1 pr-2 mr-3 cursor-pointer">
                       <select onchange="toneDropdownChange()" id="tone-dropdown" class="text-gray-900 text-sm focus:outline-none focus:border-none block p-2.5 bg-inherit shadow-none">
                           <option value="Change tone" selected>Change tone</option>
                           <option value="Change the tone of the following to serious: ">Serious</option>
                           <option value="Change the tone of the following to formal: ">Formal</option>
                           <option value="Change the tone of the following to optimistic: ">Optimistic</option>
                           <option value="Change the tone of the following to assertive: ">Assertive</option>
                       </select>
                   </div>
   
                   <div id="drop-down-menu-container" class="border border-gray-300 pl-1 pr-2 cursor-pointer">
                       <select onchange="translateDropdownChange()" id="translate-dropdown" class="text-gray-900 text-sm focus:outline-none focus:border-none block p-2.5 bg-inherit shadow-none">
                           <option value="Translate to" selected>Translate to</option>
                           <option value="Translate the following to English if it isn\'t already in English: ">English</option>
                           <option value="Translate the following to Spanish if it isn\'t already in Spanish: ">Spanish</option>
                           <option value="Translate the following to French if it isn\'t already in French: ">French</option>
                           <option value="Translate the following to German if it isn\'t already in German: ">German</option>
                       </select>
                   </div>
               </div>
   
               <div id="submit-buttons" class="py-5 flex items-center justify-end">
                   <button id="new-prompt-button" class="bg-transparent text-blue-700 py-1 px-3  hover:bg-gray-100">
                       New Prompt
                   </button>
                   <button onclick="copyText()" class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 border border-blue-700 ml-5 relative">
                       Copy Text
                       <div id="shopify-store-editor-ai-tooltip" class="shopify-store-editor-ai-tooltip">Copied!</div>
                   </button>
               </div>
           </div>
   
           <div id="body2" class="px-6 pb-4">
   
               <div class="my-3 p-2.5 w-full border border-gray-300 flex items-center">
                   <svg class="h-7 w-7 p-1 top-7 left-1.5" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 11.87 17.0877 13.5853 15.9848 14.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L14.9242 15.9848C13.5853 17.0877 11.87 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10Z">
                       </path>
                   </svg>
                   <input type="text" id="ai-instructions" class="shadow-none bg-inherit w-full text-gray-900 text-sm  block focus:outline-none pl-2" placeholder="Describe the text and tone you want to use..." required>
               </div>
   
               <div id="suggested prompts">
                   <span class="text-sm">Suggested prompts:</span>
                   <div id="prompts-container" class="">
                       <div id="prompt-button-container">
                           <button onclick="changeInstructions(this)" id="prompt-button" class="hover:bg-gray-200 flex flex-row justify-center items-center my-2 mx-1.5 px-3 py-1.5 border-1 border-gray-400 rounded-full">
                               <span class="text-sm text-gray-600">Craft a catchy slogan for...</span>
                           </button>
                       </div>
   
                       <div id="prompt-button-container">
                           <button onclick="changeInstructions(this)" id="prompt-button" class="hover:bg-gray-200 flex flex-row justify-center items-center my-2 mx-1.5 px-3 py-1.5 border-1 border-gray-400 rounded-full">
                               <span class="text-sm text-gray-600">Write a strong section header for...</span>
                           </button>
                       </div>
   
                       <div id="prompt-button-container">
                           <button onclick="changeInstructions(this)" id="prompt-button" class="hover:bg-gray-200 flex flex-row justify-center items-center my-2 mx-1.5 px-3 py-1.5 border-1 border-gray-400 rounded-full">
                               <span class="text-sm text-gray-600">Create a blog title for...</span>
                           </button>
                       </div>
   
                       <div id="prompt-button-container">
                           <button onclick="changeInstructions(this)" id="prompt-button" class="hover:bg-gray-200 flex flex-row justify-center items-center my-2 mx-1.5 px-3 py-1.5 border-1 border-gray-400 rounded-full">
                               <span class="text-sm text-gray-600">Suggest a 4 word headline for...</span>
                           </button>
                       </div>
   
                       <div id="prompt-button-container">
                           <button onclick="changeInstructions(this)" id="prompt-button" class="hover:bg-gray-200 flex flex-row justify-center items-center my-2 mx-1.5 px-3 py-1.5 border-1 border-gray-400 rounded-full">
                               <span class="text-sm text-gray-600">Write an attention grabbing title for...</span>
                           </button>
                       </div>
                   </div>
               </div>
   
               
   
               <div id="submit-buttons" class="py-5 flex items-center justify-end">
                   <button onclick="generateButtonClick()" class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 border border-blue-700 ml-5">
                       Generate Text
                   </button>
               </div>
           </div>
       </div>
   
   </div>
       `

        let box = document.createElement('div')
        box.innerHTML = html;
        document.querySelector('body').appendChild(box);

    })();
}