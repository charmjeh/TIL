## **TSX에서 SLOT 사용 테스트**
### **부모 컴포넌트**
```tsx
import { Vue, Component, Prop, Ref } from 'vue-property-decorator';
import PropTest from './PropTest';
import MakeHeader from './MakeHeader';
import SlotTest from './SlotTest';

@Component({
  components: {
    PropTest,
    MakeHeader,
    SlotTest,
  }
})
export default class ParentComponent extends Vue {
  render() {
    return (
        <div>
          <prop-test msg="This is Props Text"></prop-test>
          <make-header level="4">저는 Header입니다</make-header>
          <slot-test>
            <p name='content'>Content Slot입니다.</p>
            <p>name이 정의되지 않으면 Default Slot입니다.</p>
          </slot-test>
        </div>
      )
    )
  }
}
```
### **자식 컴포넌트**
---

#### **1. PROPS 전달 자식 컴포넌트**

```tsx
// PropTest.tsx
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PropTest extends Vue {
  @Prop() readonly msg?: string;
  
  render() {
    return (
      <div>
        <div>Hellow World!</div>
        <div>{this.msg}</div>
        <input type="text" v-test/>
      </div>
    )
  }
}
```

#### **2. 주어진 Props를 이용한 createElement 자식 컴포넌트**
```tsx
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MakeHeader extends Vue {
  @Prop() readonly level!: number;

  render(createElement) {
    return createElement(
      'h' + this.level,
      this.$slots.default
    )
  }
}
```

#### **3. 이름있는 Slot 자식 컴포넌트**
```tsx
// SlotTest.tsx
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SlotTest extends Vue {
  render() {
    return (
      <div>
        <div>{this.$slots.content}</div>
        <div>{this.$slots.default}</div>
      </div>
    )
  }
  created() {
    console.log(this.$slots)
  }
}
```

#### **노트**
---
1. tsx와 tsx사이에서 vue에서 사용하던것처럼 `<slot></slot>`으로 받을 수 없음
```tsx
// 부모.tsx
<child-component>
  자식에게 내리고 싶은 텍스트
</child-component>

// 자식.tsx
<slot></slot> // 텍스트 내용이 렌더되지 않는다.
```

2. `this.$slots`에 부모에서 내려받은 태그들이 저장된다.
```tsx
// 자식.tsx
created() {
  console.log(this.$slots)
}
```
![image](https://user-images.githubusercontent.com/43127789/127418072-aaba2895-2b02-40e3-a906-46be606c1bfa.png)


#### **결과 화면**
---
![image](https://user-images.githubusercontent.com/43127789/127417602-37c3c368-9a23-4bc8-999a-e1542724dbba.png)
