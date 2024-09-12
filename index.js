const start = () => {
    let count = 0;
    while(true){
        let opcao = "cadastrar";
        
        switch (opcao) {
            case "sair":
                console.log("Vamos cadastar")
                break;
        
            case "listar":
													console.log("vamos listar");
                break;
            case "sair":
												return;
                
        }
    }
}
//npm install inquirer

start();