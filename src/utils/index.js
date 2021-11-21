import Table from "@components/common/Table/Table.vue";
import Select from "@components/common/Select/Select.vue";
import Dialog from "@components/common/Dialog/Dialog.vue";
import DatePicker from "@components/common/Date/DatePicker.vue";
import Cascader from "@components/common/Cascader/Cascader.vue";
import Back from "@components/common/Back/Back.vue";
import Dropdown from "@components/common/Dropdown/index.vue";

// 搜索组件
import SeachGroup from "@components/common/seach-group/index.vue";
import searchGroupSearchInput from '@components/common/seach-group/searchGroupSearchInput.vue';
import SearchGroupRangeInput from '@components/common/seach-group/searchGroupRangeInput.vue';
import SearchGroupSelectInput from "@components/common/seach-group/searchGroupSelectInput.vue";
import SearchGroupCascader from "@components/common/seach-group/searchGroupCascader.vue";
import SearchGroupDatePicker from "@components/common/seach-group/searchGroupDatePicker.vue";
import SearchGroupSelect from "@components/common/seach-group/searchGroupSelect.vue";


// popup组件
import Popup from "@components/common/popup/index.vue";

const component = {
  install:function(Vue){
    Vue.component("Table",Table),
    Vue.component("Select",Select),
    Vue.component("Dialog",Dialog),
    Vue.component("DatePicker",DatePicker),
    Vue.component("Cascader",Cascader),
    Vue.component("Back",Back),
    Vue.component("Dropdown",Dropdown),
    Vue.component("Popup",Popup),
    Vue.component("SeachGroup",SeachGroup),
    Vue.component("searchGroupSearchInput", searchGroupSearchInput)
    Vue.component("SearchGroupRangeInput", SearchGroupRangeInput)
    Vue.component("SearchGroupSelectInput", SearchGroupSelectInput)
    Vue.component("SearchGroupCascader", SearchGroupCascader)
    Vue.component("SearchGroupDatePicker", SearchGroupDatePicker)
    Vue.component("SearchGroupSelect", SearchGroupSelect)
  }
}


export default component;