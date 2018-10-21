<template>

  <section class="callback">
    <h2 class="callback_title">contact us</h2>
    <div class="callback_wrap">
      <form @submit.prevent="onSubmit" class="form">
        <ul class="form__list">
          <li class="form_item">
            <p class="msg_error" v-show="$v.form.name.$invalid">Вы не ввели *Name</p>
            <input type="text"
                   class="form_input"
                   id="name"
                   name="name"
                   @input="$v.form.name.$touch()"
                   :class="{invalid: $v.form.name.$invalid}"
                   v-model="form.name"
                   required>
            <label for="name" class="form_label">name</label>
          </li>
          <li class="form_item">
            <p class="msg_error" v-show="$v.form.phone.$invalid">Вы не ввели *Phone</p>
            <input type="text"
                   class="form_input"
                   id="phone"
                   name="phone"
                   @input="$v.form.phone.$touch()"
                   :class="{invalid: $v.form.phone.$invalid}"
                   v-model="form.phone"
                   required>
            <label for="phone" class="form_label">phone</label>
          </li>
          <li class="form_item">
            <p class="msg_error" v-show="$v.form.email.$invalid">Вы не ввели *Email</p>
            <input type="text"
                   class="form_input"
                   id="email"
                   name="email" 
                   @input="$v.form.email.$touch()"
                   :class="{invalid: $v.form.email.$invalid}"
                   v-model="form.email"
                   required>
            <label for="email" class="form_label">e-mail</label>
          </li>
          <li class="form_item">
            <input type="checkbox"
                   class="form_check"
                   id="agreement"
                   name="agreement"
                   @input="$v.form.agreement.$touch()"
                   :class="{invalid: $v.form.agreement.$invalid}"
                   v-model="form.agreement"
                   required>
            <label for="agreement" class="form_label-check">I agree the processing of personal data</label>
          </li>
        </ul>
        <input type="submit"
               class="form_submit disabled" 
               value="get in touch"
               :disabled="$v.$invalid">
      </form>
      <p class="callback_text">Please tell us more about your request and give us info about your company and country</p>
    </div>
    
  </section>

</template>







<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'TestForm',
  data () {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        agreement: true
      }
    }
  },
  methods: {
    onSubmit () {
      this.$http.post('http://httpbin.org/post', {
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
        agreement: this.form.agreement,
      })
      .then(res => {
        alert(res.body.data);
      });
    }
  },
  validations: {
    form: {
      name: {required},
      phone: {required},
      email: {required, email},
      agreement: {required}
    }
  }
}
</script>






<style lang="scss" scoped>

// Variable
$light: #fff;
$dark: #000;
$green: #3db565;
$red: #b82c2c;
$btn-bg: #262626;
$line-color: #040707;

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

// style for section Callback
.callback {
  background-image: url('../assets/img/pattern.png');
  background-size: cover;
  padding: 2rem 1.5rem;

  @media screen and (min-width: 991px) {
    padding: 9rem 6rem;
  }

  &_title {
    @include font-light();
    font-size: 2rem;
    text-transform: capitalize;
    color: $light;

    @media screen and (min-width: 991px) {
      font-size: 2.7rem;
    }
  }

  &__wrap {
    @media screen and (min-width: 991px) {
      display: flex;
      align-items: flex-start;
    }
  }

  &_text {
    margin-top: 2rem;
    font-size: 1.2rem;

    @media screen and (min-width: 991px) {
      position: relative;
      display: inline-block;
      margin: 0;
      padding-left: 2.5rem;
      width: 50%;
      font-size: 1.8rem;
    }
  }
}


// style for Form
.form {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 991px) {
    display: inline-flex;
    margin-top: 4rem;
    padding-right: 2.5rem;
    width: 50%;
  }

  &__list {
    margin-top: 2rem;

    @media screen and (min-width: 991px) {
      margin: 0;
    }
  }

  &_item {
    position: relative;
    display: flex;

    &:last-of-type {
      display: flex;
      align-items: center;

      label {
        margin-left: 1rem;
      }
    }

    &:not(:last-of-type) {
      flex-direction: column;
      margin-bottom: 1.5rem;
    }
  }

  // Style for message error (where input invalid)
  .msg_error {
    position: absolute;
    right: 0;
    top: 50%;
    @include font-light();
    color: $red;
    font-size: 1.2rem;

    @media screen and (min-width: 991px) {
      @include font-bold();
      font-size: 1.5rem;
    }
  }

  &_input {
    position: relative;
    background-color: transparent;
    border: none;
    padding: 1rem 0 1rem 5rem;
    @include font-light();
    color: $light;

    @media screen and (min-width: 991px) {
      padding-left: 9rem;
      font-size: 1.8rem;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: inset 0 0 0 5rem $green; 
      -webkit-text-fill-color: $light;
      color: $light;
    }

    &.invalid {
      color: $red;

      & + label::after {
        background-color: $red;
      }
    }

    &:focus {
      border: 0;
      outline: 0;
    }

    &:focus + label {
      color: $light;
    }

    &:focus + label::after {
      transform-origin: 0 50%;
      transform: scaleX(1);
    }

    &:required:valid + label {
      color: $light;
    }
  
    &:required:valid + label::after {
      transform-origin: 0 50%;
      transform: scaleX(1);
    }
  }

  &_label {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: .8rem;
    width: 100%;
    height: 100%;
    font-size: 1.4rem;
    text-transform: capitalize; 
    transition: color 1s linear;
    cursor: pointer;

    @media screen and (min-width: 991px) {
      font-size: 1.8rem;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: $line-color;
      width: 100%;
      height: .05rem;

      @media screen and (min-width: 991px) {
        height: .1rem;
      }
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: $light;
      width: 100%;
      height: .05rem;
      transition: transform 1s linear;
      transform-origin: 100% 50%;
      transform: scaleX(0);

      @media screen and (min-width: 991px) {
        height: .1rem;
      }
    }

    &:hover {
      color: $light;
    }

    &:hover::after {
      transform-origin: 0 50%;
      transform: scaleX(1);
    }
  }

  &_label-check {
    @include font-light();
    color: $light;
    font-size: 1.2rem;

    @media screen and (min-width: 991px) {
      font-size: 1.5rem;
    }
  }

  &_submit {
    margin-top: 2rem;
    height: 5rem;
    background-color: $btn-bg;
    border: none;
    outline: 0;
    @include font-bold();
    color: $light;
    font-size: 1.2rem;
    font-variant: small-caps;
    transition: all 1s;

    &[disabled] {
      background-color: #676767;
      color: #979797;
      cursor: default;
    }

    @media screen and (min-width: 991px) {
      margin-top: 3.5rem;
      width: 27rem;
      height: 8rem;
      font-size: 1.8rem;
    }
    
    &:focus {
      border: 0;
      outline: 0;
    }

  }
}

</style>
