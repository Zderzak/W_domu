// OPISPętla for jak śnieżna kula ulepi kod HTML, zwiększając
// go w każdymobrocie o kolejną liczbę od 1 do 100 i przecinek (,).
// Kod HTML czyli zmienna kodHTML zostanie wstrzykniety do div-a wynik.
const wynik = document.querySelector('#wynik');
//utworzenie zmiennej, która będzie przechowywać kod do wstrzyknięcia
let kodHTML = '';

//pętla for
for(let i=1;i<=100;i++)
{
    kodHTML = kodHTML+i+",";
}

wynik.innerHTML = kodHTML;