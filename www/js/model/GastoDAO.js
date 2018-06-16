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
			// contentType:"application/x-www-form-urlencoded",
			dataType:'json',
			data:{
				mes: 5,
				ano: 2018
			},
			success:function(resp)
			{
				// console.log(resp);

				var listVereadorGasto = [{}];

				for(var i = 0; i < resp.length; i++)
				{
					var vereadorAtual = resp[i].VEREADOR;

					for(var j = 0; j < resp.length; j++)
					{
						var gastoTotal = 0;

						if(vereadorAtual == resp[j].VEREADOR)
						{
							gastoTotal += resp[j].VALOR;
						}

						if(1+j < resp.length)
						{
							if(resp[j+1].VEREADOR != vereadorAtual)
							{
								listVereadorGasto.push(
									{
										"vereador":vereadorAtual,
										"gasto_total":gastoTotal
									}
								);		
							}
						}
					}

				}

				console.log(listVereadorGasto);
				callbacksuccess(resp);
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