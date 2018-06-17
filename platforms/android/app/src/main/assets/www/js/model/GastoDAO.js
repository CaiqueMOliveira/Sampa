class GastoDAO
{

	/**
	 * Obtem os gastos publicos por agrupados pelo vereador
	 */
	getGastosPessoais(callbacksuccess, callbackfail)
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
				var vereadorAtual = ""; //Vereador que esta acumulando dentro do for
				var acumular = false; //Serve para verificr a necessidade de acumular
				var totalAcumulado = 0; 

				resp = ordenarPorNome( resp );

				for(var i = 0; i < resp.length; i++)
				{

					let vereadorList = resp[i].VEREADOR ;

					
					//Tira erro de array vazio
					if( vereadorAtual == ""  ){
						vereadorAtual = vereadorList;
					}

					//Vereador diferente
					if( vereadorAtual != vereadorList )
					{
						listVereadorGasto.push(
									{
										"vereador":vereadorAtual,
										"gasto_total":totalAcumulado
									}
								);	
						vereadorAtual = resp[i].VEREADOR;
						//console.log( vereadorAtual );
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
										"gasto_total":totalAcumulado
									}
								);	
					}
					
				}

				var result = ordenarPorGastos( listVereadorGasto );
				//console.log( result );
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
	 * Obtem os gastos publicos por vereador e por tipo de gasto
	 */
	getGastosEspecificosPessoais(callbacksuccess, callbackfail)
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
				var vereadorAtual = ""; //Vereador que esta acumulando dentro do for
				var acumularVereador = false; //Serve para verificr a necessidade de acumular
				var acumularVereador
				var totalAcumulado = 0; 


				resp = ordenarPorNome( resp );

				for( var i = 0 ; i < resp.length ; i++ )
				{

				}
			
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

//Ordena a lista do que mais gasta pro que menos gasta
function ordenarPorGastos( lista )
{
	return lista.sort(compareGastos);
}

function compareGastos(a,b) {
  if (a.gasto_total < b.gasto_total )
     return -1;
  if (a.gasto_total  > b.gasto_total )
    return 1;
  return 0;
}


function ordenarPorNome( lista )
{
	return lista.sort(compareNome);
}

function compareNome(a,b) {
  if (a.VEREADOR < b.VEREADOR )
     return -1;
  if (a.VEREADOR  > b.VEREADOR )
    return 1;
  return 0;
}
