// global emitter
import mitt from 'mitt';
// import mitt, { Emitter } from 'mitt';

interface Events {
  foo: string;
  bar?: any;
}

const emitter = mitt();
// const emitter: Emitter<Events> = mitt<Events>()

export default emitter;
