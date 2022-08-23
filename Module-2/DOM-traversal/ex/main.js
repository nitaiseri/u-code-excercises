$(".generator").click(function(){
    const processorId = $(this).closest("div").attr("id");
    const computerDataId =  $(this).closest(".computer").data("id");
    const busNumber = $(this).closest(".computer").find(".BUS").text();
    console.log(`Processor ID: ${processorId}`);
    console.log(`Computer’s data-id: ${computerDataId}`);
    console.log(`BUS: ${busNumber}`);
})

$(".validator").click(function(){
    const generatorText = $(this).closest(".computer").find(".generator").text();
    const mb =  $(this).closest(".computer").find(".MB").text();
    const QRS = $(this).closest(".computer").find(".QR");
    console.log(`Generator text: ${generatorText}`);
    console.log(`The MB: ${mb}`);
    console.log(`Both QR's: ${QRS[0].textContent} ${QRS[1].textContent}`);
})