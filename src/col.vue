<template>
  <div class="col" :class="colClass"
  :style="colStyle">
      <slot></slot>
  </div>
</template>

<script lang='ts'>
  let validator = (value)=> {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) { valid = false; }
    })
    return valid
  }
  export default {
    name: 'GuluCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      ipad: {type: Object, validator,},
      narrowPc: {type: Object, validator,},
      pc: {type: Object, validator,},
      widePc: {type: Object, validator,}
    },
    data(){
      return {
        gutter: 0
      }
    },
    methods:{
      createClasses (obj,str = '') {
        if (!obj) {return []}
        let array = []
        if (obj.span){array.push(`col-${str}${obj.span}`)}
        if (obj.offset){array.push(`offset-${str}${obj.offset}`)}
        return array
      }
    },
    computed: {
      colClass() {
        let {span, offset, ipad,narrowPc,pc,widePc} = this
        let createClasses = this.createClasses
        return [
          ...createClasses({span,offset}),
          ...createClasses(ipad,'ipad-'),
          ...createClasses(narrowPc,'narrowPc-'),
          ...createClasses(pc,'pc-'),
          ...createClasses(widePc,'widePc-'),
        ]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    }
  }
</script>

<style lang='scss' >
  $outline-color: green;
  $height: 40px;
  .col {
    height: $height;
    outline: 1px solid $outline-color;
    $class: col-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @media(min-width:577px) {
      $class: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media(min-width: 769px) {
      $class: col-narrowPc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class: offset-narrowPc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media(min-width: 993px) {
      $class: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width:1201px) {
      $class: col-widePc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class: offset-widePc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>