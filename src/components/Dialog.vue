<template>
  <teleport to="body">
    <div class="modal-dialog"
         v-if="show">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"
                id="staticBackdropLabel">teleport 功能测试</h5>
            <button type="button"
                    class="close"
                    @click="handleClose">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            这是一个删除确认框，你确定要删除吗？
          </div>
          <div class="modal-footer">
            <button type="button"
                    class="btn btn-secondary"
                    @click="handleClose">Close</button>
            <button type="button"
                    @click="handleConfirm"
                    class="btn btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { SetupContext } from 'vue'
interface DialogProps {
  show: boolean
}
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close', 'confirm'],
  setup(props: DialogProps, context: SetupContext) {
    const handleClose = () => {
      context.emit('close')
    }
    const handleConfirm = () => {
      context.emit('confirm')
    }
    return {
      handleClose,
      handleConfirm
    }
  }
}
</script>
