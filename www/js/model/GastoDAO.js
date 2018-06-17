class GastoDAO
{

	/**
	 * Obtem os gastos publicos por agrupados pelo vereador
	 */
	getGastosPessoais(mes, ano, callbacksuccess, callbackfail)
	{
		$.ajax({
			type:"POST",
			url: route["gastos_pessoais"],
			dataType:'json',
			data:{
				mes: mes,
				ano: ano
			},
			success:function(resp)
			{

				resp = ordenarPorNome( resp );

				let listVereadorGasto = somarGastosPorVereador( resp );

				var result = ordenarPorGastos( listVereadorGasto );

				callbacksuccess( result );
			},
			error:function(a,error,c)
			{
				console.error(a);
				console.error(error);
				console.error(c);
				if(callbackfail != undefined){callbackfail(error);}
			}
		});
	}

	/**
	 * Obtem os gastos publicos por vereador e por tipo de gasto( pelo nome da despesa )
	 */
	getGastosEspecificosPessoais(mes, ano, chave, callbacksuccess, callbackfail)
	{
		$.ajax({
			type:"POST",
			url: route["gastos_pessoais"],
			dataType:'json',
			data:{
				mes: mes,
				ano: ano
			},
			success:function(resp)
			{

				var listVereadorGasto = []; //Lista final
				var palavra = chave; //Seta a chave para a busca
				var cont = 0;
				var totalMedia = 0;

				var result = [];

				//Pega somente as despesas baseada em uma palavra
				for( var i = 0 ; i < resp.length ; i++ )
				{					
					if( resp[i].DESPESA ==  palavra )
					{
						cont += 1;
						totalMedia += resp[i].VALOR ;
						result.push( resp[i] );
					}
				}

				totalMedia = totalMedia / cont ; //Calcula a média
				
				result = somarGastosPorVereador( result );

				result = ordenarPorGastos( result );
				
				callbacksuccess( result , totalMedia );
			},
			error:function(a,error,c)
			{
				console.error(a);
				console.error(error);
				console.error(c);
				if(callbackfail != undefined){callbackfail(error);}
			}
		});
	}

	//Gastos totais de um mes e ano especifico
	getGastosTotais(mes, ano , callbacksuccess, callbackfail)
	{
		$.ajax({
			type:"POST",
			url: route["gastos_pessoais"],
			dataType:'json',
			data:{
				mes: mes,
				ano: ano
			},
			success:function(resp)
			{

				var result = 0;

				//Pega tota gasto em um mes
				for( var i = 0 ; i < resp.length ; i++ )
				{
					result += resp[i].VALOR;
				}

				//Pega a média por vereador
				resp = somarGastosPorVereador( resp );
				let media = result / resp.length ;

				let retorno = {"total" : result.toFixed(2) , "media": media.toFixed(2)};
				callbacksuccess( retorno );
			},
			error:function(a,error,c)
			{
				console.error(a);
				console.error(error);
				console.error(c);
				if(callbackfail != undefined){callbackfail(error);}
			}
		});
	}

	/**
	 * Obtem os gastos publicos por vereador (pelo nome do vereador)
	 */
	getGastosPorNome(mes, ano, vereador, callbacksuccess, callbackfail)
	{
		$.ajax({
			type:"POST",
			url: route["gastos_pessoais"],
			dataType:'json',
			data:{
				mes: 4,
				ano: 2018
			},
			success:function(resp)
			{

				var listVereadorGasto = []; //Lista final
				var palavra = chave;

				var result = [];

				//Pega somente as despesas baseada em uma palavra
				for( var i = 0 ; i < resp.length ; i++ )
				{					
					if( resp[i].VEREADOR ==  palavra )
					{
						result.push( resp[i] );
					}
				}

				result = somarGastosPorVereador( result );

				result = ordenarPorGastos( result );
				
				callbacksuccess( result );
			},
			error:function(a,error,c)
			{
				console.error(a);
				console.error(error);
				console.error(c);
				if(callbackfail != undefined){callbackfail(error);}
			}
		});
	}

}

//Função que trata os dados e os agrupam por vereador
function somarGastosPorVereador( resp )
{
	var listVereadorGasto = []; //Lista final
	var vereadorAtual = ""; //Vereador que esta acumulando dentro do for
	var acumular = false; //Serve para verificr a necessidade de acumular
	var totalAcumulado = 0; 

	for(var i = 0; i < resp.length; i++)
	{

		let vereadorList = resp[i].VEREADOR ;

					
		//Tira erro de array vazio
		if( vereadorAtual == ""  )
		{
			vereadorAtual = vereadorList;
		}

		//Vereador diferente
		if( vereadorAtual != vereadorList )
		{
			listVereadorGasto.push(
			{
				"vereador":vereadorAtual,
				"gasto_total":totalAcumulado
			});	
			vereadorAtual = resp[i].VEREADOR;
			acumular = false;
		}
		else
		{
			acumular = true;
		}

		//Verifica se acumula
		if( acumular ){
			totalAcumulado += resp[i].VALOR;
		}else{
			totalAcumulado = resp[i].VALOR;
		}

		//Verifica se é o ultimo item do array
		if( i == resp.length - 1 ){
			listVereadorGasto.push(
			{
				"vereador":vereadorAtual,
				"gasto_total":totalAcumulado.toFixed(2)
			});	
		}
					
	}
	return listVereadorGasto;	
}

//Ordena a lista do que mais gasta pro que menos gasta
function ordenarPorGastos( lista )
{
	return lista.sort(compareGastos);
}

//Ordena a lista baseada no nome
function ordenarPorNome( lista )
{
	return lista.sort(compareNome);
}

//Function para o sort
function compareGastos(a,b) {
  if (a.gasto_total < b.gasto_total )
     return -1;
  if (a.gasto_total  > b.gasto_total )
    return 1;
  return 0;
}

//Function para o sort
function compareNome(a,b) {
  if (a.VEREADOR < b.VEREADOR )
     return -1;
  if (a.VEREADOR  > b.VEREADOR )
    return 1;
  return 0;
}
