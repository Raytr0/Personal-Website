<?php
setcookie("user", "waaaaaaa", time() + (86400 * 30), "/"); // 86400 = 1 day
echo $_COOKIE["user"] //needs time wait for it to load dw about error
?>
