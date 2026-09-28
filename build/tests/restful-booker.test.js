// Definição da URL base da API Restful-booker
const BASE_URL = "https://restful-booker.herokuapp.com";
async function testRestfulBookerContracts() {
    console.log("=== INICIANDO TESTES DE CONTRATO: RESTFUL-BOOKER ===\n");
    // ==========================================
    // 1. TESTE DO ENDPOINT GET (/booking/:id)
    // ==========================================
    try {
        const bookingId = 1;
        console.log(`[GET] Consultando reserva ID: ${bookingId}...`);
        const getResponse = await fetch(`${BASE_URL}/booking/${bookingId}`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });
        console.log(`[GET] Status Code Retornado: ${getResponse.status}`);
        if (getResponse.ok) {
            const getData = (await getResponse.json());
            console.log("Payload recebido (GET):", JSON.stringify(getData, null, 2));
            // Validação de Contrato (Garantindo os tipos de dados corretos)
            if (typeof getData.firstname === "string" &&
                typeof getData.lastname === "string" &&
                typeof getData.totalprice === "number" &&
                typeof getData.depositpaid === "boolean" &&
                typeof getData.bookingdates === "object" &&
                typeof getData.bookingdates.checkin === "string" &&
                typeof getData.bookingdates.checkout === "string") {
                console.log("✔ Sucesso: O contrato do GET está em conformidade!\n");
            }
            else {
                console.error("✖ Falha: A estrutura do JSON do GET difere do esperado.\n");
            }
        }
        else {
            console.error(`✖ Erro na requisição GET. Status: ${getResponse.status}\n`);
        }
    }
    catch (error) {
        console.error("Erro técnico no bloco GET:", error);
    }
    // ==========================================
    // 2. TESTE DO ENDPOINT POST (/booking)
    // ==========================================
    try {
        console.log("[POST] Criando uma nova reserva...");
        const payload = {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }; //[cite: 1]
        const postResponse = await fetch(`${BASE_URL}/booking`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        });
        console.log(`[POST] Status Code Retornado: ${postResponse.status}`);
        if (postResponse.ok) {
            const postData = (await postResponse.json());
            console.log("Payload recebido (POST):", JSON.stringify(postData, null, 2));
            // Validação de Contrato
            if (typeof postData.bookingid === "number" &&
                typeof postData.booking === "object" &&
                postData.booking.firstname === payload.firstname &&
                postData.booking.bookingdates.checkin === payload.bookingdates.checkin) {
                console.log("✔ Sucesso: O contrato do POST está em conformidade!\n");
            }
            else {
                console.error("✖ Falha: A estrutura do JSON do POST difere do esperado.\n");
            }
        }
        else {
            console.error(`✖ Erro na requisição POST. Status: ${postResponse.status}\n`);
        }
    }
    catch (error) {
        console.error("Erro técnico no bloco POST:", error);
    }
}
// Executar os testes
testRestfulBookerContracts();
export {};
//# sourceMappingURL=restful-booker.test.js.map