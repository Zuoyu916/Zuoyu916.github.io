function white(x){
    if (x.style.backgroundColor == 'transparent'){
    x.style.backgroundColor = "var(--ivory)";
    x.style.color = "#202020";
    setTimeout(function(){x.style.backgroundColor = 'transparent';x.style.color = "var(--ivory)";}, 800);
    }
    else{
        x.style.backgroundColor = 'transparent';
        x.style.color = "var(--ivory)";
    }}