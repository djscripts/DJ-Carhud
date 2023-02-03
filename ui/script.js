$(() => {
    let carhud = document.getElementsByClassName('container');
    let count = document.getElementById('velocidad');
    let fuel = document.getElementById('gasolina');
    let gear = document.getElementById('gears');
    let velocity = document.getElementById('velocity');
    $(carhud).fadeOut(100);

    let Carhud = {}

    window.addEventListener("message", (event) => {
        let e = event.data;
        if (e.type === "carhud:show") {
            $(carhud).fadeIn(700)
            $(count).text(Math.round(e.velocity));
            $(fuel).text(Math.round(e.fuel))
            $(gears).text(Math.round(e.gear));
            if (Math.round(e.velocity) === 0) {
                $(count).text("000");
            }

            if (Math.round(e.velocity) <= 9) {
                $(count).text("00"+Math.round(e.velocity))
            } else if (Math.round(e.velocity) >= 9 && Math.round(e.velocity) <= 99) {
                $(count).text("0"+Math.round(e.velocity))
            }

            if (Math.round(e.fuel) <= 9){
                $(fuel).text("0"+Math.round(e.fuel));
            }

            if (Math.round(e.gear) <= 0){
                $(gear).text("R");
            }

            if (Math.round(e.fuel) >= 3){
                $("#nofuel-icon").fadeOut(100);
            } else if (Math.round(e.fuel) <= 2){
                $("#gasolina-icon").fadeOut(100);
                $("#gasolina").fadeOut(100);
                $("#nofuel-icon").fadeIn(500).fadeOut(500);
            } else if (Math.round(e.fuel) >= 3){
                $("#nofuel-icon").fadeOut(100);
                $("#gasolina-icon").fadeIn(100);
                $("#gasolina").fadeIn(100);
            }


        } else if (e.type === "carhud:hide") {
            $(carhud).fadeOut(300)
        }
    })
})