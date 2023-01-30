"use strict";

// 2ND TABLE
function tableCreate() {
     const body = document.body,
          tbl = document.createElement('table');
          tbl.setAttribute("class", "border_class");
     tbl.style.width = '100%';
     tbl.style.textAlign = 'center';
     tbl.style.align = 'center';
     tbl.style.border = '1px solid black';
     tbl.style.borderCollapse = 'collapse';

     const titles = [" ", "MONTH 1", "MONTH 2","MONTH 3", "MONTH 4", "MONTH 5", "MONTH 6"];

     const texts = [" ", "Designer & Artist", "Video Game Specification",
     "Game Design", "Programming", "User Testing", "Deployment",
     "2nd Important things", "Technical Architects", "Video Game Structure", "Content Creation",
     "3rd Important things", "Tool Vendors", "Determine tools and Methodology"];
     var value = 0;
     for (let i = 0; i < 3; i++) {
          const tr = tbl.insertRow();
          for (let j = 0; j < 7; j++) {
               if (i === 1 && j === 4) {
                    break;
               } else {
                    const td = tr.insertCell();
                    
                    var theText = texts[value];
                    value ++;
                    td.appendChild(document.createTextNode(`${theText}`));
                    if (i === 0 && j === 3) {
                         td.setAttribute('rowSpan', '3');
                    }
                    if (i === 1 && j === 3) {
                         td.setAttribute('rowSpan', '2');
                    }
                    if (i === 0 && j === 5) {
                         td.setAttribute('rowSpan', '3');
                    }
                    if (i === 0 && j === 6) {
                         td.setAttribute('rowSpan', '3');
                    }
               }
               if (i === 2 && j === 2) {
                    break;
               
               }
          }
     }
     body.appendChild(tbl);
}

tableCreate();