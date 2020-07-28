//    window.onload = function () {
//        let stage = document.getElementById('stage');
//        let context = stage.getContext("2d");

//        //botão
//        document.addEventListener("keydown", keyPush);

//        setInterval(game, 60);

//        const velocidade = 1;
//        let velocidadeX, velocidadeY = 0;
//        let pontoX = 10;
//        let pontoY = 10;
//        let tamanho = 20;
//        let quantidadePecas = 20;
//        let posicaoInicialx = 15;
//        let posicaoInicialy = 15;
//        let rastro = [];
//        rastro = 5;

//        function game() {
//            pontoX += velocidadeX;
//            pontoY += velocidadeY;

//            if (pontoX < 0) {
//                pontoX = quantidadePecas - 1;
//            }
//            if (pontoX > quantidadePecas - 1) {
//                px = 0;
//            }
//            if (pontoY < 0) {
//                pontoY = quantidadePecas - 1;
//            }
//            if (pontoY > quantidadePecas - 1) {
//                pontoY = 0;
//            }

//            //palco
//            context.fillStyle = "black";
//            context.fillRect(0, 0, stage.width, stage.height);

//            //Maçã
//            context.fillStyle = "red";
//            context.fillRect(posicaoInicialx * tamanho, posicaoInicialy * tamanho, tamanho, tamanho);

//            // cobra
//            context.fillStyle = "yellow";
//              for (let i = 0; i < rastro.length; i++) {
//                context.fillRect(rastro[i].X * tamanho,
//                    rastro[1].Y * tamanho, tamanho -1, tamanho -1);

//                if (rastro[i].x == pontoX && rastro[i].y == pontoy) {
//                    velocidadeX =  velocidadeY = 0;
//                    rastro = 5;
//                }

//                // Criando objeto
//                rastro.push({ x: pontoX, y: pontoY })
//                while (rastro.length > rastro) {
//                    rastro.shift();
//                }

//                // Aumentando a cauda da cobrinha
//                if (posicaoInicialx == pontoX && posicaoInicialy == pontoy) {
//                    rastro++;
//                    posicaoInicialx = Math.floor(Math.random * quantidadePecas);
//                    posicaoInicialy = Math.floor(Math.random * quantidadePecas);
//                }
//            }
//        }
//        function keyPush(event) {
//            switch (event.keyCode) {
//                case 37: // esquerda
//                    velocidadeX = -velocidade;
//                    velocidadeY = 0;
//                    break;
//                case 38: // cima
//                    velocidadeX = 0;
//                    velocidadeY = -velocidade;
//                    break;
//                case 39: // direita
//                    velocidadeX = velocidade;
//                    velocidadeY = 0;
//                    break;
//                case 40: // baixo
//                    velocidadeX = 0;
//                    velocidadeY = velocidade;
//                    break;
//                default:
//                    break;
//            }
//        }
//    }


window.onload = function () {
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");

    //botão
    document.addEventListener("keydown", keyPush);

    setInterval(game, 80);
    const vel = 1;
    var vx = vy = 0;
    var px = 10;
    var py = 15;
    var tp = 20;
    var qp = 20;
    var ax = ay = 15;
    var trail = [];
    tail = 5;

    function game() {
        px += vx;
        py += vy;
        if (px < 0) {
            px = qp - 1;
        }
        if (px > qp - 1) {
            px = 0;
        }
        if (py < 0) {
            py = qp - 1;
        }
        if (py > qp - 1) {
            py = 0;
        }

        //palco
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.width, stage.height);

        //maçã
        ctx.fillStyle = "red";
        ctx.fillRect(ax * tp, ay * tp, tp, tp);

        //cobra
        ctx.fillStyle = "green";
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1);
            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0;
                tail = 5;
            }
        }

        // Criando objeto
        trail.push({ x: px, y: py })
        while (trail.length > tail) {
            trail.shift();
        }
        if (ax == px && ay == py) {
            tail++;
            ax = Math.floor(Math.random() * qp);
            ay = Math.floor(Math.random() * qp);
        }
    }

    function keyPush(event) {
        switch (event.keyCode) {
            case 37: // Left
                vx = -vel;
                vy = 0;
                break;
            case 38: // up
                vx = 0;
                vy = -vel;
                break;
            case 39: // right
                vx = vel;
                vy = 0;
                break;
            case 40: // down
                vx = 0;
                vy = vel;
                break;
            default:

                break;
        }
    }
}