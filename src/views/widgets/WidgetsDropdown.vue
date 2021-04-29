<template>
  <CRow>
    <CCol sm="6" lg="4">
      <!-- <div class="bg-gradient-primary card" style=" padding: 20px; min-height: 150px">
        <div class="text-value-xl">{{numbers.total}}</div>
        <p class="text-value-md">All Orders</p>
      </div> -->
      <CWidgetDropdown color="gradient-success"   style="min-height: 150px"> 
        <template #text>
          <p>All orders</p>
          <p>Pay as you go insurance</p>
        </template>
        <template #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
          >
            <template #toggler-content>
              <CIcon name="cil-settings"/>
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="4">
        <!-- <div class="bg-gradient-info card" style=" padding: 20px; min-height: 150px">
          <div class="text-value-xl">{{numbers.new}}</div>
          <p class="text-value-md">New Orders</p>
        </div> -->
        <CWidgetDropdown color="gradient-info"  text="New orders" style="min-height: 150px"> -->
          <template #default>
            <CDropdown
              color="transparent p-0"
              placement="bottom-end"
              :caret="false"
            >
              <template #toggler-content>
                <CIcon name="cil-location-pin"/>
              </template>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdown>
          </template>
          <template #footer>
            <CChartLineSimple
              pointed
              class="mt-3 mx-3"
              style="height:70px"
              :data-points="[1, 18, 9, 17, 34, 22, 11]"
              point-hover-background-color="info"
              :options="{ elements: { line: { tension: 0.00001 }}}"
              label="Members"
              labels="months"
            />
          </template>
        </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="4">
      <!-- <div
        class="bg-gradient-warning card"
        style=" padding: 20px; min-height: 150px"
      >
        <div class="text-value-xl">{{numbers.servicemen}}</div>
        <p class="text-value-md">Servicemen</p>
      </div> -->
      <CWidgetDropdown color="gradient-warning"  text="Servicemen" style="min-height: 150px"> -->
        <template #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
          >
            <template #toggler-content>
              <CIcon name="cil-settings"/>
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            class="mt-3"
            style="height:70px"
            background-color="rgba(255,255,255,.2)"
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
            :options="{ elements: { line: { borderWidth: 2.5 }}}"
            point-hover-background-color="warning"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    
  </CRow>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'

export default {
  name: 'WidgetsDropdown',
  components: { CChartLineSimple, CChartBarSimple },
  data(){
    return {
      
    }
  }
}
</script>
