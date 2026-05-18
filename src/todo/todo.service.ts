import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private storage: Todo[] = [];

  create(todo: Todo): void {
    todo.id = this.storage.length + 1;
    this.storage.push(todo);
  }

  update(id: number, todo: Todo): void {
    const index = this.storage.findIndex((t: Todo) => t.id === id);
    this.storage[index] = todo;
  }

  remove(id: number): void {
    const index = this.storage.findIndex((t: Todo) => t.id === id);
    this.storage.splice(index, 1);
  }

  findOne(id: number): Todo | undefined {
    return this.storage.find((t: Todo) => t.id === id);
  }

  findAll(): Todo[] {
    return this.storage;
  }
}
