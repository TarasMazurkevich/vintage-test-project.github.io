<template>

  <section class="offices">
    <div class="offices__info">
      <h2 class="offices_title">our offices</h2>
      <ul class="city__list" @click="toggle($event)">
        <li class="city_item" v-for="key in city"
                              :data-target="key.value" 
                              :class="{active: key.active}">{{ key.value }}</li>
      </ul>
      <p class="offices_msg">Global Message Services {{ officeMsg }} LLC</p>
      <ul class="place" v-for="item in place"
                        :data-target="item.target"
                        :data-country="item.country"
                        :class="{active: item.active}">

        <li class="place_item">{{ item.address }}</li>
        <li class="place_item">{{ item.index }}</li>
        <li class="place_item">{{ item.country }}</li>
      </ul>
    </div>
    <div class="map">
      <span class="map_dot" v-for="item in place" 
                           :data-country="item.country"
                           :class="{active: item.active}"></span>
    </div>
  </section>

</template>







<script>
export default {
  name: 'TestMap',
  data () {
    return {
      city: [
        {value: 'kyiv',      active: true},
        {value: 'new york',  active: false},
        {value: 'guangzhou', active: false},
        {value: 'barcelona', active: false}
      ],
      officeMsg: 'Ukraine',
      place: [
        {address: 'Kuiv, Stepan Bandera, 33',       index: '09098',   country: 'Ukraine',   target: 'kyiv',        active: true},
        {address: 'New York, Centre St, 11',        index: '10007',   country: 'USA',       target: 'new york',    active: false},
        {address: 'Guangzhou',                      index: '510000',  country: 'China',     target: 'guangzhou',   active: false},
        {address: 'Barcelona, Plaça de Catalunya',  index: '08002',   country: 'Spain',     target: 'barcelona',   active: false}
      ]
    }
  },
  methods: {
    toggle (e) {
      let target = e.target; // Берем нажатый элемент
      let place = document.querySelectorAll('.place'); // Берем массив элементов ul.place
      let dot = document.querySelectorAll('.map_dot'); // Берем метки на карте

      // С помощью делегирования отслеживаем нажатие -> делаем проверки на данные -> скрываем/открываем нужные элементы, смещаем метку
      while (target.tagName !== 'UL') {
        // Проверяем нажали ли мы на LI или все, что в нем находится (да -> идет дальнейшая проверка -> скрываем/открываем элемент, смещаем метку) | (нет -> ничего не делаем)
        if (target.tagName === 'LI' && target.hasAttribute('data-target')) {
          this.city.forEach(item => {
            if(item.value === target.dataset.target)
              item.active = true;
            else
              item.active = false;
          });
          place.forEach((item, i) => {
            if(item.dataset.target === target.dataset.target) {
              item.classList.add('active');
              this.officeMsg = item.dataset.country;
              dot[i].classList.add('active');
            } else {
              item.classList.remove('active');
              dot[i].classList.remove('active');
            }
          });

          return;
        }
        target = target.parentNode;
      }
    }
  }
}
</script>






<style lang="scss" scoped>

// Variable
$light: #fff;
$green: #3db565;
$info-bg: #262626;

// Mixins
@mixin font-light() {
  font-family: 'Suisse-light', Arial, sans-serif;
  font-weight: normal;
}

@mixin font-bold() {
  font-family: 'Suisse-Bold', Arial, sans-serif;
  font-weight: bold;
}

// --------------------------------------------------------------

// style for section Offices
.offices {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  background-color: $info-bg;
  color: $light;

  @media screen and (min-width: 991px) {
    flex-direction: row;
    height: 40rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;

    @media screen and (min-width: 991px) {
      padding: 0 6rem;
      padding-bottom: 8rem;
      width: 50%;
    }
  }

  &_title {
    margin-top: 2.5rem;
    @include font-light();
    font-size: 2rem;
    text-transform: capitalize;

    @media screen and (min-width: 991px) {
      margin-top: 8rem;
      font-size: 2.7rem;
    }
  }

  &_msg {
    margin-top: 2rem;
    @include font-light();
    font-size: 1.5rem;

    @media screen and (min-width: 991px) {
      margin-top: 3.5rem;
      font-size: 2.5rem;
    }
  }
}

// Style for block | offices -> .city__list && .city_item
.city {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2rem;
    width: 100%;

    @media screen and (min-width: 991px) {
      margin-top: 3.5rem;
      width: 60%;
    }
  }

  &_item {
    @include font-bold();
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;

    @media screen and (min-width: 991px) {
      font-size: 1.3rem;
    }

    &:hover {
      color: $green;
    }
    
    &:not(:last-of-type) {
      margin-right: 1.5rem;
    }

    &.active {
      color: $green;
    }
  }
}

// Style for block | offices -> .place
.place {
  display: none;
  flex-direction: column;
  margin-top: 2rem;
  @include font-light();
  font-size: 1rem;

  &.active {
    display: flex;
  }

  @media screen and (min-width: 991px) {
    margin-top: 3rem;
    font-size: 1.3rem;
  }

  &_item {
    &:not(:last-of-type) {
      margin-bottom: .7rem;
    }
  }
}


// Style for map
.map {
  position: relative;
  margin-top: 2rem;
  background-image: url('../assets/img/sample.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: auto;
  height: 20rem;

  @media screen and (min-width: 991px) {
    margin-top: 0;
    width: 50%;
    height: 100%;
  }

  &_dot {
    display: none;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: $green;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;

    &.active {
      display: inline-block;
    }


    @each $item, $x, $y in (Ukraine, 44, 44) (USA, 50, 55) (China, 70, 20) (Spain, 60, 80) {
      &[data-country="#{$item}"] {
        top: $x + %;
        left: $y + %;
      }
    }
    

    @media screen and (min-width: 991px) {
      width: 3rem;
      height: 3rem;
    }
  }
}

</style>
