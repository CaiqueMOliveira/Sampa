class Database
{

	constructor()
	{
		// const DB = openDatabase("dbsoucidadao","1.0","Banco de dados Sou Cidadao",1024);

		// DB.transaction(function(transaction){
		// 	transaction.executeSql(
		// 		"CREATE TABLE tbl_categoria_gasto "+
		// 		"("+
		// 		"categoria TEXT NOT NULL"+
		// 		")",
		// 		[],
		// 		function(transaction, result)
		// 		{
		// 			console.log("Entidade criada com sucesso! - tbl_categoria_gasto");
		// 		},
		// 		function(transaction, error)
		// 		{
		// 			if(error.code == 5)
		// 			{
		// 				console.warn('Entidade já existente - tbl_categoria_gasto');
		// 			}
		// 			else 
		// 			{
		// 				console.error(error);
		// 			}
		// 		}
		// 	);
		// });

		// DB.transaction(function(transaction){
		// 	transaction.executeSql(
		// 		"INSERT INTO tbl_categoria_gasto (categoria) VALUES(?)",
		// 		["ASSINATURA DE JORNAIS E REVISTAS"],
		// 		function(transaction, result)
		// 		{
		// 			console.log("categoria inserida com sucesso - ASSINATURA DE JORNAIS E REVISTAS");
		// 		},
		// 		function(transaction, error)
		// 		{
		// 			console.error("Falaha ao tentar inserir a categoria - ASSINATURA DE JORNAIS E REVISTAS");
		// 		}
		// 	);
		// });
		// DB.transaction(function(transaction){
		// 	transaction.executeSql(
		// 		"INSERT INTO tbl_categoria_gasto (categoria) VALUES(?)",
		// 		["COMBUSTIVEL"],
		// 		function(transaction, result)
		// 		{
		// 			console.log("categoria inserida com sucesso - COMBUSTIVEL");
		// 		},
		// 		function(transaction, error)
		// 		{
		// 			console.error("Falaha ao tentar inserir a categoria - COMBUSTIVEL");
		// 		}
		// 	);
		// });
		// DB.transaction(function(transaction){
		// 	transaction.executeSql(
		// 		"INSERT INTO tbl_categoria_gasto (categoria) VALUES(?)",
		// 		["COMPOSIÇÃO/ARTE/DIAGRAMAÇÃO/PRODUÇÃO/IMPRESSAO GRAFICA"],
		// 		function(transaction, result)
		// 		{
		// 			console.log("categoria inserida com sucesso - COMPOSIÇÃO/ARTE/DIAGRAMAÇÃO/PRODUÇÃO/IMPRESSAO GRAFICA");
		// 		},
		// 		function(transaction, error)
		// 		{
		// 			console.error("Falaha ao tentar inserir a categoria - COMPOSIÇÃO/ARTE/DIAGRAMAÇÃO/PRODUÇÃO/IMPRESSAO GRAFICA");
		// 		}
		// 	);
		// });
		// DB.transaction(function(transaction){
		// 	transaction.executeSql(
		// 		"INSERT INTO tbl_categoria_gasto (categoria) VALUES(?)",
		// 		["CONTRATAÇAO DE PESSOA JURIDICA"],
		// 		function(transaction, result)
		// 		{
		// 			console.log("categoria inserida com sucesso - CONTRATAÇAO DE PESSOA JURIDICA");
		// 		},
		// 		function(transaction, error)
		// 		{
		// 			console.error("Falaha ao tentar inserir a categoria - CONTRATAÇAO DE PESSOA JURIDICA");
		// 		}
		// 	);
		// });
		// DB.transaction(function(transaction){
		// 	transaction.executeSql(
		// 		"INSERT INTO tbl_categoria_gasto (categoria) VALUES(?)",
		// 		["CORREIOS"],
		// 		function(transaction, result)
		// 		{
		// 			console.log("categoria inserida com sucesso - CORREIOS");
		// 		},
		// 		function(transaction, error)
		// 		{
		// 			console.error("Falaha ao tentar inserir a categoria - CORREIOS");
		// 		}
		// 	);
		// });
		// DB.transaction(function(transaction){
		// 	transaction.executeSql(
		// 		"INSERT INTO tbl_categoria_gasto (categoria) VALUES(?)",
		// 		["ELABORAÇÃO/MANUTENÇAO DE SITE/HOSPEDAGEM"],
		// 		function(transaction, result)
		// 		{
		// 			console.log("categoria inserida com sucesso - ELABORAÇÃO/MANUTENÇAO DE SITE/HOSPEDAGEM");
		// 		},
		// 		function(transaction, error)
		// 		{
		// 			console.error("Falaha ao tentar inserir a categoria - ELABORAÇÃO/MANUTENÇAO DE SITE/HOSPEDAGEM");
		// 		}
		// 	);
		// });
		// DB.transaction(function(transaction){
		// 	transaction.executeSql(
		// 		"INSERT INTO tbl_categoria_gasto (categoria) VALUES(?)",
		// 		["EVENTOS/SEMINARIOS"],
		// 		function(transaction, result)
		// 		{
		// 			console.log("categoria inserida com sucesso - EVENTOS/SEMINARIOS");
		// 		},
		// 		function(transaction, error)
		// 		{
		// 			console.error("Falaha ao tentar inserir a categoria - ELABORAÇÃO/MANUTENÇAO DE SITE/HOSPEDAGEM");
		// 		}
		// 	);
		// });
	}

}