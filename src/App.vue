<template>
  <main>
    <div class="weather">
      <h1 class="weather_title">Weather app</h1>
      <RouterView/>
    </div>
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300&display=swap');

body {
  font-family: 'Sora', sans-serif;
  background: linear-gradient(to right, rgb(144, 109, 182), rgb(83, 180, 146));
}

main {

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #fff;

  .weather {
    border-radius: 10px;
    //background: rosybrown;
    background: #171717;
    box-shadow: 9px 10px 20px -5px rgba(0,0,0,0.5);

    width: 100%;
    max-width: 550px;
    min-height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px 40px;

    &_title{
      font-size: 42px;
      color: #fff;
      margin-bottom: 10px;
    }

    &_description{
      font-size: 18px;
      color: #cdcdcd;
      margin: 5px 0 10px;
    }
  }

}

</style>
