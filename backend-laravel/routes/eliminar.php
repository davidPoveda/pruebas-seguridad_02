<?php
// No hay verificación del usuario actual
$conn = mysqli_connect("localhost", "root", "", "test");
$id = $_GET['id'];
mysqli_query($conn, "DELETE FROM citas WHERE id = $id");
echo "Cita eliminada";
?>