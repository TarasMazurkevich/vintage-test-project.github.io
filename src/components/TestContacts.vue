<template>
  
  <section class="contacts">
    <h1 class="contacts_title">contacts</h1>
    <div class="contacts__wrap">
      <div class="headquarters">
        <h2 class="headquarters_title">
          <span>gms</span> headquarters
        </h2>
        <div class="headquarters__wrap">
          <div class="headquarters__col">
            <ul class="info">
              <li class="info_item" v-for="item in info">{{ item }}</li>
            </ul>
            <a class="headquarters_phone" :href="mainPhone.href">{{ mainPhone.number }}</a>
          </div>
          <div class="headquarters__col">
            <ul class="address">
              <li class="address_item" v-for="key in address">{{ key.desc }}<a :href="key.href">{{ key.value }}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="support">
        <h2 class="support_title">Technical support <span>24/7</span></h2>
        <p class="support_text">GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.</p>
        <a class="support_phone" :href="supportPhone.href">{{ supportPhone.number }}</a>
      </div>
    </div>
  </section>

</template>







<script>
export default {
  name: 'TestContacts',
  data () {
    return {
      info: [
        'Global Message Services Ukraine LLC',
        'Bundesstrasse 5 | 3rd Floor',
        '6300 Zug',
        'Switzerland'
      ],
      address: [
        {desc: 'email',        value: 'info@gms-worldwide.com', href: `mailto:info@gms-worldwide.com`},
        {desc: 'send message', value: 'viber us',               href: `viber://add?number=+41415446200`},
        {desc: 'send form',    value: 'contact us',             href: `#`},
      ],
      mainPhone: {   number: '+41 41 544 62 00', href: 'tel:+41415446200'},
      supportPhone: {number: '+41 41 544 62 06', href: 'tel:+41415446206'}
    }
  }
}
</script>






<style lang="scss" scoped>

// Variable
$light: #fff;
$green: #3db565;
$header-text: #333333;

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

// style for section Contacts
.contacts {
  color: $header-text;
  padding: 0 1.5rem;

  @media screen and (min-width: 991px) {
    margin-top: 5rem;
    padding: 0 6rem 5rem 6rem;
  }

  &_title {
    @include font-light();
    font-size: 3.6rem;
    text-align: center;

    @media screen and (min-width: 991px) {
      text-align: left;
      font-size: 4rem;
    }

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__wrap {
    @media screen and (min-width: 991px) {
      display: flex;
    }
  }
}

// style for block contacts -> headquarters
.headquarters {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media screen and (min-width: 991px) {
    margin-top: 2.5rem;
    width: 50%;
  }
  
  &_title {
    @include font-light();
    font-size: 2rem;
    text-transform: capitalize;

    @media screen and (min-width: 991px) {
      font-size: 2.7rem;
    }

    span {
      color: $green;
      text-transform: uppercase;
    }
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width: 991px) {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 2.5rem;
      height: 15rem;
    }
  }

  &__col {
    margin-top: 1rem;
    width: 100%;

    @media screen and (min-width: 991px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 0;
      width: auto;
      height: 100%;
    }

    &:last-of-type {
      text-align: right;
      @media screen and (min-width: 991px) {
        text-align: left;
        margin-top: 0;
        margin-left: 3rem;
        height: 100%;
      }
    }
  }

  &_phone {
    color: $green;
    font-size: 2rem;
    @media screen and (min-width: 991px) {
      display: inline-block;
      margin-top: 1.5rem;
      font-size: 2.5rem;
      vertical-align: bottom;
    }
  }
}

// style for block contacts -> headquarters -> info
.info {
  display: flex;
  flex-direction: column;
  margin-bottom: .8rem;

  &_item {
    font-size: 1.3rem;

    @media screen and (min-width: 991px) {
      margin-top: 0;
      font-size: 1.5rem;
    }

    &:not(:last-of-type) {
      margin-bottom: .8rem;

      @media screen and (min-width: 991px) {
        margin-bottom: 0;
      }
    }
  }
}

// style for block contacts -> headquarters -> address
.address {
  @media screen and (min-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  

  &_item {
    @extend .info_item;
    text-transform: capitalize;

    @media screen and (min-width: 991px) {
      margin-top: 0;
    }

    a {
      display: block;
      margin-top: .8rem;
      @include font-bold();
      color: $green;
      text-transform: uppercase;

      @media screen and (min-width: 991px) {
        font-size: 1.4rem;
        margin-top: 0;
      }
    }
  }
}


// style for block contacts -> support
.support {
  @extend .headquarters;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;

  @media screen and (min-width: 991px) {
    align-items: flex-start;
    width: 50%;
    padding-left: 5rem;
  }

  &_title {
    @extend .headquarters_title;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  &_text {
    margin-top: 1rem;
    width: 75%;
    text-align: center;
    font-size: 1.2rem;

    @media screen and (min-width: 991px) {
      margin-top: 2.5rem;
      width: 100%;
      font-size: 1.3rem;
      text-align: left;
    }
  }

  &_phone {
    @extend .headquarters_phone;
    margin-top: 1rem;

    @media screen and (min-width: 991px) {
      margin-top: 2.4rem;
    }
  }
}

</style>
