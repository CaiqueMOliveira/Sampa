class Hora
{
	static getHoraAtual()
	{
		let hora = new Date().getHours();

		return hora < 10 ? "0"+hora : hora;
	}

	static getMinutoAtual()
	{
		let minuto = new Date().getMinutes();
		return minuto < 10 ? "0"+minuto : minuto;
	}
}