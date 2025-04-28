
window.onload = function() {
    console.log("Página de Locações carregada com sucesso!");
    
};

function abrirModalCadastro() {
    document.getElementById("modalCadastro").style.display = "block";
  }
  
  function fecharModalCadastro() {
    document.getElementById("modalCadastro").style.display = "none";
  }
  
  
  window.onclick = function(event) {
    let modal = document.getElementById("modalCadastro");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  