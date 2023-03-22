
async function findReservations(table,date) {
    const response = await fetch(`http://localhost:3001/reservations${table.toString()}/${date.toString()}`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await response;
    return data;
  }

  async function getAll() {
    const response = await fetch(`http://localhost:3001/reservations`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await response;
    return data;
  }

async function reserveTable(table,date,from,to){
    const response = await fetch("http://localhost:3001/reserve", {
      method: "POST",
      mode: "no-cors", 
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify({
        "table":table.toString(),
        "date":date.toString(),
        "from":Number(from),
        "to":Number(to)
      })
    });
    console.log(table);
    return response.status;
}

async function deleteTable(id){
  const response = await fetch(`http://localhost:3001/delete${id}`);
  return response.status;
}
  export {reserveTable,findReservations,deleteTable};