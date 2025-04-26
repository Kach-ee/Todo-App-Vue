<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h3>Omo! Page Not Found</h3>
        <h1>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
      </div>
      <h2>Sorry, the page you requested was not found</h2>
      <router-link to="/" class="error-redirect">
        Go back to your Todo<span>s</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.notfound-404 {
  position: relative;
  height: 240px;
}

.notfound-404 h1 {
  font-family: "Montserrat", sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 252px;
  font-weight: 900;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
}

.notfound-404 h1 > span {
  text-shadow: -8px 0px 0px #262626;
}

.notfound-404 h3 {
  font-family: "Cabin", sans-serif;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  margin: 0;
  letter-spacing: 3px;
  padding-left: 6px;
}

.notfound h2 {
  font-family: "Cabin", sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  margin-top: 0;
  margin-bottom: 25px;
}

.error-redirect {
  text-decoration: none;
  border-radius: 5px;
  font-family: "Cabin", sans-serif;
  background-color: #272323;
  color: cadetblue;
  margin: 0 10px;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  border: none;
}

.error-redirect:hover {
  border: 1px solid #cac8c8;
  font-size: 19px;
}

.error-redirect span {
  font-size: 14px;
}

@media only screen and (max-width: 767px) {
  .notfound-404 {
    height: 200px;
  }
  .notfound-404 h1 {
    font-size: 200px;
  }
}

@media only screen and (max-width: 480px) {
  .notfound-404 {
    height: 162px;
  }
  .notfound-404 h1 {
    font-size: 162px;
    height: 150px;
    line-height: 162px;
  }
  .notfound h2 {
    font-size: 16px;
  }
}
</style>
