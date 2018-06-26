import Aux from './Aux';
import Modal from './Modal/Modal';

return (
      <Aux>
          <Modal show={this.props.formVisible} modalClosed={!this.props.formVisible} >
      <div style={{
              position: "fixed",
              backgroundColor: "white",
              width: "70%",
              border: "1px solid #ccc",
              padding: "16px",
              left: "15%",
              top: "5%",
              boxSizing: "border-box",
              transition: "all 0.1s ease-out",
               transform: this.props.formVisible? 'translateY(0)':'translateY(-100vh)',
               opage:this.props.formVisible?'1':'0'}}>
        {form}
      </div>
      </Modal>
      </Aux>

    )
